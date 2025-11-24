// Q8 Custom dropdown with capturing close
const toggle = document.getElementById('toggle');
const options = document.getElementById('options');

toggle.addEventListener('click', (e) => {
  options.classList.toggle('hidden');
  e.stopPropagation();
});

options.addEventListener('click', (e) => {
  if (e.target.classList.contains('opt')) {
    toggle.textContent = e.target.textContent;
    options.classList.add('hidden');
  }
});

// Use capturing to close when clicking outside
document.addEventListener('click', (e) => {
  if (!options.classList.contains('hidden')) options.classList.add('hidden');
}, true); // capture phase
