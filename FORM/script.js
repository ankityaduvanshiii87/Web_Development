// script.js
// All UI handlers, validation, and API calls are located here.
// This script expects json-server (or similar API) at http://localhost:3000

document.addEventListener('DOMContentLoaded', () => {
  // elements
  const regBtn = document.getElementById('regBtn');
  const loginBtn = document.getElementById('loginBtn');
  const loginModalEl = document.getElementById('loginModal');

  // attach
  if (regBtn) regBtn.addEventListener('click', getData);
  if (loginBtn) loginBtn.addEventListener('click', handleLogin);

  // clear modal alerts when opened
  if (loginModalEl) {
    loginModalEl.addEventListener('show.bs.modal', () => {
      const alp = document.getElementById('loginAlertPlaceholder');
      if (alp) alp.innerHTML = '';
      const form = document.getElementById('loginForm');
      if (form) form.reset();
    });
  }
});

// Utility: show bootstrap alert inside element with id
function showAlertIn(id, message, type = 'danger') {
  const placeholder = document.getElementById(id);
  if (!placeholder) {
    alert(message);
    return;
  }
  placeholder.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

// Registration handler: validates and POSTS to /signup
async function getData() {
  // read values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const country = document.getElementById('country').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
  const termsChecked = document.getElementById('terms').checked;

  // patterns
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  // validations
  if (!name || !email || !phone || !gender || !country || !password || !confirmPassword) {
    showAlertIn('regAlertPlaceholder', 'Please fill all the fields.');
    return;
  }

  if (!email.includes('@') || !emailPattern.test(email)) {
    showAlertIn('regAlertPlaceholder', 'Please enter a valid email.');
    return;
  }

  if (!passwordPattern.test(password)) {
    showAlertIn('regAlertPlaceholder', 'Password must be 7-15 characters long and include at least one numeric digit and a special character.');
    return;
  }

  if (password !== confirmPassword) {
    showAlertIn('regAlertPlaceholder', 'Passwords do not match.');
    return;
  }

  if (!termsChecked) {
    showAlertIn('regAlertPlaceholder', 'You must accept the Terms & Conditions to register.');
    return;
  }

  // payload for json-server
  const payload = {
    username: email,         // using email as username here (change if you want separate username)
    password: password,      // DEMO only: do NOT store plaintext passwords in production
    full_name: name,
    phone: phone,
    email: email,
    country: country,
    gender: gender
  };

  try {
    const res = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const newUser = await res.json();
      showAlertIn('regAlertPlaceholder', 'Registration successful (demo)!', 'success');

      // reset form after a moment
      setTimeout(() => {
        const form = document.getElementById('signupForm');
        if (form) form.reset();
      }, 700);

      // NOTE: avoid logging passwords in production
      console.log('Signed up (demo):', { id: newUser.id, username: newUser.username, full_name: newUser.full_name });
    } else {
      showAlertIn('regAlertPlaceholder', 'Registration failed. Server returned ' + res.status, 'danger');
    }
  } catch (err) {
    console.error('Registration error', err);
    showAlertIn('regAlertPlaceholder', 'Server error. Is json-server running on http://localhost:3000 ?', 'danger');
  }
}

// Login handler: queries /login?username=X&password=Y
async function handleLogin() {
  const emailOrUser = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!emailOrUser || !password) {
    showAlertIn('loginAlertPlaceholder', 'Please enter your email/username and password.');
    return;
  }

  // For demo with json-server: query by username & password
  // (In a real API you'd POST /auth/login with credentials and receive a token.)
  const encodedUser = encodeURIComponent(emailOrUser);
  const encodedPass = encodeURIComponent(password);
  const url = `http://localhost:3000/login?username=${encodedUser}&password=${encodedPass}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      showAlertIn('loginAlertPlaceholder', 'Login request failed. Server returned ' + res.status, 'danger');
      return;
    }
    const data = await res.json();

    if (Array.isArray(data) && data.length > 0) {
      showAlertIn('loginAlertPlaceholder', 'Login successful (demo)', 'success');

      // close the modal shortly after success
      setTimeout(() => {
        const loginModalEl = document.getElementById('loginModal');
        const modalInstance = bootstrap.Modal.getInstance(loginModalEl) || new bootstrap.Modal(loginModalEl);
        modalInstance.hide();
      }, 800);

      // demo: log the user (do NOT log sensitive info in production)
      console.log('LOGIN (demo):', { username: data[0].username });
    } else {
      showAlertIn('loginAlertPlaceholder', 'Invalid username or password.');
    }
  } catch (err) {
    console.error('Login error', err);
    showAlertIn('loginAlertPlaceholder', 'Server error. Is json-server running on http://localhost:3000 ?', 'danger');
  }
}
