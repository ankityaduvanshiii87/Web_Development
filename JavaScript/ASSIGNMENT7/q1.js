// Q1 Product List Manager - uses event delegation for edit/delete
const input = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('productList');

function createItem(name) {
  const li = document.createElement('li');
  li.innerHTML = `<span class="name">${name}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
  li.setAttribute('data-editing', 'false');
  return li;
}

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) return;
  list.appendChild(createItem(val));
  input.value = '';
});

// Event delegation on ul
list.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  if (e.target.classList.contains('delete')) {
    li.remove();
    return;
  }
  if (e.target.classList.contains('edit')) {
    enterEditMode(li);
    return;
  }
});

// Click outside to auto-save edit
document.addEventListener('click', (e) => {
  const editing = document.querySelector('li[data-editing="true"]');
  if (!editing) return;
  if (!editing.contains(e.target)) {
    exitEditMode(editing, true);
  }
}, true); // use capture to detect clicks early

function enterEditMode(li) {
  if (li.getAttribute('data-editing') === 'true') return;
  li.setAttribute('data-editing', 'true');
  const nameSpan = li.querySelector('.name');
  const current = nameSpan.textContent;
  const input = document.createElement('input');
  input.value = current;
  input.className = 'input';
  nameSpan.replaceWith(input);
  input.focus();
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') exitEditMode(li, true);
    if (e.key === 'Escape') exitEditMode(li, false);
  });
}

function exitEditMode(li, save) {
  if (li.getAttribute('data-editing') !== 'true') return;
  li.setAttribute('data-editing', 'false');
  const inputEl = li.querySelector('input');
  const newName = save ? inputEl.value.trim() || 'Untitled' : li.getAttribute('data-old') || inputEl.value;
  const span = document.createElement('span');
  span.className = 'name';
  span.textContent = newName;
  inputEl.replaceWith(span);
}
