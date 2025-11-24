// Q9 Form validation with preventDefault and live errors
const form = document.getElementById('form');
const nameI = document.getElementById('fname');
const emailI = document.getElementById('femail');
const passI = document.getElementById('fpass');
const errName = document.getElementById('err-name');
const errEmail = document.getElementById('err-email');
const errPass = document.getElementById('err-pass');
const success = document.getElementById('success');

function validate() {
  let ok = true;
  errName.textContent = '';
  errEmail.textContent = '';
  errPass.textContent = '';
  if (!nameI.value.trim()) { errName.textContent = 'Name required'; ok = false; }
  if (!emailI.value.includes('@')) { errEmail.textContent = 'Valid email required'; ok = false; }
  if (passI.value.length < 6) { errPass.textContent = 'Password min 6 chars'; ok = false; }
  return ok;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validate()) {
    success.classList.remove('hidden');
  }
});

[nameI,emailI,passI].forEach(inp => {
  inp.addEventListener('input', () => {
    validate();
    success.classList.add('hidden');
  });
});
