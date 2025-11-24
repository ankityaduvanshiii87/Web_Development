// Q5 Image gallery with modal
const images = [
  'https://picsum.photos/id/1015/200/150',
  'https://picsum.photos/id/1025/200/150',
  'https://picsum.photos/id/1035/200/150',
  'https://picsum.photos/id/1045/200/150',
  'https://picsum.photos/id/1055/200/150',
  'https://picsum.photos/id/1065/200/150'
];

const grid = document.getElementById('grid');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.style.margin = '6px';
  img.style.cursor = 'pointer';
  grid.appendChild(img);
  img.addEventListener('click', (e) => {
    modal.classList.remove('hidden');
    modalContent.innerHTML = `<img src="${src.replace('/200/150','/800/600')}" style="max-width:100%;">`;
    e.stopPropagation();
  });
});

modal.addEventListener('click', () => modal.classList.add('hidden'));
modalContent.addEventListener('click', (e) => e.stopPropagation());
