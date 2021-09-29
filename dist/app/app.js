const input = document.querySelector('.input-item');
const btnAdd = document.querySelector('.btn-add');
const list = document.querySelector('.list');
let listItems = list.childNodes;

const init = () => {
  input.value = '';
  input.focus();
};

init();
//===================================================
// Add new Item
//===================================================
addItem = function () {
  if (!input.value) return;

  // Item container which includes text and btn pair
  const itemContainer = document.createElement('li');
  itemContainer.classList.add('flex', 'list__item');

  // text content of the item
  const itemText = document.createElement('p');
  itemText.innerText = input.value;
  itemContainer.appendChild(itemText);
  itemContainer.insertAdjacentElement('beforeend', newBtnPair());

  list.appendChild(itemContainer);
  init();
};

const newBtn = function (btnType) {
  const buttons = document.createElement('div');
  if (btnType === 'done') {
    buttons.innerHTML = `<i class="fas fa-clipboard-check"></i>`;
    buttons.classList.add('btn', `btn-done`);
  }
  if (btnType === 'del') {
    buttons.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    buttons.classList.add('btn', `btn-del`);
  }
  return buttons;
};

const newBtnPair = function () {
  const btnPair = document.createElement('div');
  btnPair.classList.add('btn-pair');
  btnPair.insertAdjacentElement('afterbegin', newBtn('done'));
  btnPair.insertAdjacentElement('beforeend', newBtn('del'));
  return btnPair;
};

//===================================================
// Delete Item
//===================================================
const delItem = function (e) {
  const btnDiv = e.target.closest('div');
  if (!btnDiv) return;
  const item = btnDiv.closest('li');
  if (btnDiv.classList.contains('btn-del')) {
    item.remove();
  }
};
//===================================================
// Checked Items
//===================================================
const checkedItem = function (e) {
  const btnDiv = e.target.closest('div');
  if (!btnDiv) return;
  const item = btnDiv.closest('li');
  if (btnDiv.classList.contains('btn-done')) {
    item.firstChild.classList.toggle('item-done');
  }
};

//===================================================
// Event Listeners
//===================================================
btnAdd.addEventListener('click', addItem);
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addItem();
});
list.addEventListener('click', delItem);
list.addEventListener('click', checkedItem);
