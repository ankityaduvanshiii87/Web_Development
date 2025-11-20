// script_fetch.js
// Uses fetch() for AJAX. Exposes login() and signup() flows.
// Endpoints: GET /login?username=...&password=...   POST /signup

const API_BASE = 'http://localhost:3000';

function showAlertIn(id, message, type='danger') {
  const el = document.getElementById(id);
  if (!el) { alert(message); return; }
  el.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
}

// Signup (POST /signup)
async function signupFetch(payload) {
  try {
    const res = await fetch(`${API_BASE}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Server: ' + res.status);
    return await res.json();
  } catch (err) {
    throw err;
  }
}

// Login (GET /login?username=...&password=...)
async function loginFetch(username, password) {
  try {
    const u = encodeURIComponent(username);
    const p = encodeURIComponent(password);
    const res = await fetch(`${API_BASE}/login?username=${u}&password=${p}`);
    if (!res.ok) throw new Error('Server: ' + res.status);
    return await res.json(); // array (empty or matching records)
  } catch (err) {
    throw err;
  }
}

// Hook UI (assumes elements exist)
document.addEventListener('DOMContentLoaded', () => {
  const regBtn = document.getElementById('regBtn');
  const loginBtn = document.getElementById('loginBtn');

  if (regBtn) regBtn.addEventListener('click', async () => {
    // Collect values from DOM
    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const phone = (document.getElementById('phone')?.value || '').trim();
    const password = (document.getElementById('password')?.value || '');
    const confirmPassword = (document.getElementById('confirmPassword')?.value || '');
    const country = (document.getElementById('country')?.value || '');
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    const termsChecked = document.getElementById('terms')?.checked || false;

    // minimal client-side validation
    if (!name || !email || !phone || !password || !confirmPassword || !gender || !country) {
      showAlertIn('regAlertPlaceholder','Please fill all fields.');
      return;
    }
    if (password !== confirmPassword) { showAlertIn('regAlertPlaceholder','Passwords do not match.'); return; }

    const payload = { username: email, password, full_name: name, phone, email, country, gender };

    try {
      const created = await signupFetch(payload);
      showAlertIn('regAlertPlaceholder','Registered (demo) ✅','success');
      console.log('created', created);
      setTimeout(()=> document.getElementById('signupForm')?.reset(), 700);
      // Optionally also append to /login so they can log in immediately:
      // await fetch(`${API_BASE}/login`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({username: email, password}) });
    } catch (err) {
      console.error(err);
      showAlertIn('regAlertPlaceholder','Registration failed. Is json-server running?', 'danger');
    }
  });

  if (loginBtn) loginBtn.addEventListener('click', async () => {
    const username = (document.getElementById('loginEmail')?.value || '').trim();
    const password = (document.getElementById('loginPassword')?.value || '');
    if (!username || !password) { showAlertIn('loginAlertPlaceholder','Enter username & password.'); return; }

    try {
      const results = await loginFetch(username, password);
      if (Array.isArray(results) && results.length > 0) {
        showAlertIn('loginAlertPlaceholder','Login success (demo)', 'success');
        console.log('login ok', results[0]);
        // close modal after a beat:
        setTimeout(()=> { const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal')) || new bootstrap.Modal(document.getElementById('loginModal')); modal.hide(); }, 700);
      } else {
        showAlertIn('loginAlertPlaceholder','Invalid credentials.');
      }
    } catch (err) {
      console.error(err);
      showAlertIn('loginAlertPlaceholder','Login failed. Is json-server running?', 'danger');
    }
  });
});
