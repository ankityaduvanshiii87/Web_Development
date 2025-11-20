// script_jquery.js
const API_BASE = 'http://localhost:3000';

function showAlertIn(id, message, type='danger') {
  const $el = $('#' + id);
  if (!$el.length) { alert(message); return; }
  $el.html(`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`);
}

function ajaxRequest(method, url, data) {
  return $.ajax({
    url: url,
    method: method,
    contentType: 'application/json',
    data: data ? JSON.stringify(data) : null
  });
}

$(function(){
  $('#regBtn').on('click', function(){
    const name = ($('#name').val() || '').trim();
    const email = ($('#email').val() || '').trim();
    const password = $('#password').val() || '';
    const confirm = $('#confirmPassword').val() || '';
    const phone = ($('#phone').val() || '').trim();
    const gender = $('input[name="gender"]:checked').val() || '';
    const country = $('#country').val() || '';
    if (!name||!email||!password||!confirm||!phone||!gender||!country) { showAlertIn('regAlertPlaceholder','Fill all fields.'); return; }
    if (password !== confirm) { showAlertIn('regAlertPlaceholder','Passwords do not match.'); return; }
    const payload = { username: email, password, full_name: name, phone, email, country, gender };
    ajaxRequest('POST', `${API_BASE}/signup`, payload)
      .done(data => { showAlertIn('regAlertPlaceholder','Registered (demo) ✓','success'); console.log('created', data); setTimeout(()=> $('#signupForm')[0].reset(),700); })
      .fail(err => showAlertIn('regAlertPlaceholder','Registration failed'));
  });

  $('#loginBtn').on('click', function(){
    const u = ($('#loginEmail').val() || '').trim();
    const p = $('#loginPassword').val() || '';
    if (!u||!p) { showAlertIn('loginAlertPlaceholder','Enter credentials'); return; }
    ajaxRequest('GET', `${API_BASE}/login?username=${encodeURIComponent(u)}&password=${encodeURIComponent(p)}`)
      .done(data => {
        if (Array.isArray(data) && data.length>0) {
          showAlertIn('loginAlertPlaceholder','Login success (demo)','success');
          setTimeout(()=> { const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal')) || new bootstrap.Modal(document.getElementById('loginModal')); modal.hide(); },700);
          console.log('login', data[0]);
        } else showAlertIn('loginAlertPlaceholder','Invalid username/password');
      })
      .fail(err => showAlertIn('loginAlertPlaceholder','Login failed'));
  });
});
