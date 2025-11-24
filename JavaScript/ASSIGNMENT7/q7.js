// Q7 Mouse path and coordinates
const box = document.getElementById('box');
const coords = document.getElementById('coords');

box.addEventListener('mousemove', (e) => {
  coords.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
});

box.addEventListener('dblclick', (e) => {
  const dot = document.createElement('div');
  dot.style.width = '8px';
  dot.style.height = '8px';
  dot.style.background = 'red';
  dot.style.position = 'absolute';
  dot.style.left = (e.offsetX - 4) + 'px';
  dot.style.top = (e.offsetY - 4) + 'px';
  dot.style.borderRadius = '50%';
  box.appendChild(dot);
});
