// Q6 Real-time table filter
const search = document.getElementById('search');
const tbl = document.getElementById('tbl').tBodies[0];
const nores = document.getElementById('nores');

search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  let shown = 0;
  Array.from(tbl.rows).forEach(row => {
    const text = row.textContent.toLowerCase();
    if (text.includes(q)) {
      row.style.display = '';
      shown++;
    } else {
      row.style.display = 'none';
    }
  });
  nores.classList.toggle('hidden', shown > 0);
});
