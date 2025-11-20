// script_xhr.js
const API_BASE = 'http://localhost:3000';

function showAlertIn(id, message, type='danger') {
  const el = document.getElementById(id);
  if (!el) { alert(message); return; }
  el.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
}

function xhrRequest(method, url, data=null, cbSuccess, cbError) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >=200 && xhr.status < 300) {
        cbSuccess(xhr.responseText ? JSON.parse(xhr.responseText) : {});
      } else {
        cbError && cbError(xhr.status);
      }
    }
  };
  xhr.onerror = () => cbError && cbError('network');
  xhr.send(data ? JSON.stringify(data) : null);
}

// Login: GET /login?username=...&password=...
function loginXHR(username, password, onSuccess, onError) {
  const u = encodeURIComponent(username), p = encodeURIComponent(password);
  xhrRequest('GET', `${API_BASE}/login?username=${u}&password=${p}`, null, onSuccess, onError);
}

// Signup: POST /signup
function signupXHR(payload, onSuccess, onError) {
  xhrRequest('POST', `${API_BASE}/signup`, payload, onSuccess, onError);
}

// Hook UI
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('regBtn')?.addEventListener('click', () => {
    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const password = (document.getElementById('password')?.value || '');
    const confirm = (document.getElementById('confirmPassword')?.value || '');
    const phone = (document.getElementById('phone')?.value || '').trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    const country = document.getElementById('country')?.value || '';
    if (!name || !email || !phone || !password || !confirm || !gender || !country) { showAlertIn('regAlertPlaceholder','Fill all fields.'); return; }
    if (password !== confirm) { showAlertIn('regAlertPlaceholder','Passwords do not match.'); return; }
    const payload = { username: email, password, full_name: name, phone, email, country, gender };
    signupXHR(payload, (data) => {
      showAlertIn('regAlertPlaceholder','Registered (demo) ✓','success');
      console.log('created', data);
      setTimeout(()=> document.getElementById('signupForm')?.reset(), 700);
    }, (err) => showAlertIn('regAlertPlaceholder','Registration failed: '+err));
  });

  document.getElementById('loginBtn')?.addEventListener('click', () => {
    const u = (document.getElementById('loginEmail')?.value || '').trim();
    const p = (document.getElementById('loginPassword')?.value || '');
    if (!u || !p) { showAlertIn('loginAlertPlaceholder','Enter credentials'); return; }
    loginXHR(u, p, (data) => {
      if (Array.isArray(data) && data.length>0) {
        showAlertIn('loginAlertPlaceholder','Login success (demo)', 'success');
        setTimeout(()=> { const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal')) || new bootstrap.Modal(document.getElementById('loginModal')); modal.hide(); }, 700);
        console.log('login', data[0]);
      } else {
        showAlertIn('loginAlertPlaceholder','Invalid username/password');
      }
    }, (err) => showAlertIn('loginAlertPlaceholder','Login failed: '+err));
  });
});
