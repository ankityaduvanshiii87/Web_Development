// Q3 Multi-step form with validation
function show(id) {
  document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

document.getElementById('next1').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  if (!name) { alert('Name required'); return; }
  show('step2');
});

document.getElementById('back2').addEventListener('click', () => show('step1'));

document.getElementById('next2').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  if (!email || !email.includes('@')) { alert('Valid email required'); return; }
  show('step3');
});

document.getElementById('back3').addEventListener('click', () => show('step2'));

document.getElementById('submit').addEventListener('click', () => {
  const password = document.getElementById('password').value;
  if (!password || password.length < 6) { alert('Password min 6'); return; }
  const summary = document.getElementById('summary');
  summary.innerHTML = `<h3>Summary</h3><p>Name: ${document.getElementById('name').value}</p><p>Email: ${document.getElementById('email').value}</p>`;
  show('summary');
});
