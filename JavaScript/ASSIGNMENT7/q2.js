// Q2 Live Char Counter
const ta = document.getElementById('ta');
const count = document.getElementById('count');
const reset = document.getElementById('reset');
const MAX = 100;

function update() {
  const left = MAX - ta.value.length;
  count.textContent = left + ' characters remaining';
  count.className = 'small';
  if (left <= 20 && left > 0) count.classList.add('warn');
  if (left <= 0) count.classList.add('danger');
}

ta.addEventListener('input', (e) => {
  if (ta.value.length > MAX) {
    ta.value = ta.value.slice(0, MAX);
  }
  update();
});

ta.addEventListener('keydown', (e) => {
  const left = MAX - ta.value.length;
  if (left <= 0 && e.key.length === 1) {
    e.preventDefault();
  }
});

reset.addEventListener('click', () => {
  ta.value = '';
  update();
});

update();
