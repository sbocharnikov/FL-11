let count = 0;
const maxItems = 10;
let rootNode = document.getElementById('root');

let input = document.getElementById('input');
input.oninput = handleInput;
function handleInput() {
  if (input.value) {
      console.log(document.getElementById('addButton'));
    document.getElementById('addButton').disabled = false;
    document.getElementById('addButton').firstChild.style.color = 'lightskyblue';
  }
}

let addButton = document.getElementById('addButton');
addButton.onclick = handleAddButton;

function handleAddButton() {
  let newAction = document.getElementById('input').value;
  let ul = document.getElementsByTagName('ul')[0];
  let newLi = document.createElement('li');
  newLi.draggable = true;
  let string =
    '<input type="checkbox" name="checkbox" class="checkbox"><label>' +
    newAction +
    '</label><button class="editButton"><i class="material-icons editButtonIcon">edit</i></button>' +
    '<button class="deleteButton"><i class="material-icons deleteButtonIcon">delete</i></button>';
  newLi.innerHTML = string;
  ul.appendChild(newLi);
  ul.lastChild.firstChild.onchange = handleChecked;
  ul.lastChild.lastChild.onclick = handleDeleteButton;
  ul.lastChild.lastChild.previousSibling.onclick = handleEditButton;
  document.getElementById('input').value = '';
  document.getElementById('addButton').disabled = true;
  document.getElementById('addButton').firstChild.style.color = 'lightgray';
  count++;
  if (count === maxItems) {
    document.getElementById('input').disabled = true;
    let popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
  }
}

function handleChecked(e) {
  e.target.disabled = true;
  e.target.nextSibling.nextSibling.onclick = function() {
    return false;
  };
  e.target.nextSibling.nextSibling.firstChild.style.color = 'lightgray';
}

function handleEditButton(e) {
  let li = e.target.parentElement.parentElement;
  li.innerHTML =
    '<input type="text" name="input" id="quickInput">' +
    '<button type="button" id="quickInputButton">' +
    '<i class="material-icons quickInputButtonIcon">save</i></button>';
  li.lastChild.onclick = () => {
    let text = li.firstChild.value;
    li.innerHTML =
      '<input type="checkbox" name="checkbox" class="checkbox"><label>' +
      text +
      '</label><button class="editButton"><i class="material-icons editButtonIcon">edit</i></button>' +
      '<button class="deleteButton"><i class="material-icons deleteButtonIcon">delete</i></button>';
    li.firstChild.onchange = handleChecked;
    li.lastChild.onclick = handleDeleteButton;
    li.lastChild.previousSibling.onclick = handleEditButton;
  };
}

function handleDeleteButton(e) {
  let li = e.target.parentElement.parentElement;
  document.getElementsByTagName('ul')[0].removeChild(li);
  count--;
  if (count < maxItems) {
    document.getElementById('input').disabled = false;
    let popup = document.getElementById('myPopup');
    popup.classList.toggle('show', false);
  }
}

document.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('Text', event.target.innerHTML);
});

document.addEventListener('dragover', function(event) {
  event.preventDefault();
});

document.addEventListener('drop', function(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData('Text');
  let li = document.createElement('li');
  li.innerHTML = data;
  event.target.innerHTML = data;
});
