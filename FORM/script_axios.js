// script_axios.js
const API_BASE = 'http://localhost:3000';

function showAlertIn(id, message, type='danger') {
  const el = document.getElementById(id);
  if (!el) { alert(message); return; }
  el.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
}

async function signupAxios(payload) {
  return (await axios.post(`${API_BASE}/signup`, payload)).data;
}

async function loginAxios(username, password) {
  const res = await axios.get(`${API_BASE}/login`, { params: { username, password } });
  return res.data;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('regBtn')?.addEventListener('click', async () => {
    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const password = (document.getElementById('password')?.value || '');
    const confirm = (document.getElementById('confirmPassword')?.value || '');
    if (!name||!email||!password||!confirm) { showAlertIn('regAlertPlaceholder','Fill all fields'); return; }
    if (password !== confirm) { showAlertIn('regAlertPlaceholder','Passwords do not match'); return; }
    const payload = { username: email, password, full_name: name, phone: document.getElementById('phone')?.value || '' };
    try {
      const created = await signupAxios(payload);
      showAlertIn('regAlertPlaceholder','Registered (demo) ✓','success');
      console.log('created', created);
      setTimeout(()=> document.getElementById('signupForm')?.reset(), 700);
    } catch (err) {
      console.error(err);
      showAlertIn('regAlertPlaceholder','Registration failed');
    }
  });

  document.getElementById('loginBtn')?.addEventListener('click', async () => {
    const u = (document.getElementById('loginEmail')?.value || '').trim();
    const p = (document.getElementById('loginPassword')?.value || '');
    if (!u || !p) { showAlertIn('loginAlertPlaceholder','Enter credentials'); return; }
    try {
      const data = await loginAxios(u, p);
      if (Array.isArray(data) && data.length > 0) {
        showAlertIn('loginAlertPlaceholder','Login success (demo)','success');
        setTimeout(()=> { const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal')) || new bootstrap.Modal(document.getElementById('loginModal')); modal.hide(); },700);
        console.log('login', data[0]);
      } else {
        showAlertIn('loginAlertPlaceholder','Invalid username/password');
      }
    } catch (err) {
      console.error(err);
      showAlertIn('loginAlertPlaceholder','Login failed');
    }
  });
});
