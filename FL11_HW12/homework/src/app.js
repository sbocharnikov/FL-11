const rootNode = document.getElementById('root');

/*const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];*/

let todoItems = [];

let count = 0;
let doneCount = 0;

window.addEventListener('hashchange', function(e) {    
    if (e.newURL.match(/add$/)) {
      document.getElementById('main').style.display = 'none';
      document.getElementById('modify').style.display = 'none';
      document.getElementById('add').style.display = 'unset';
    } else if (e.newURL.match(/#modify/)) {
      document.getElementById('main').style.display = 'none';
      document.getElementById('modify').style.display = 'unset';
      document.getElementById('add').style.display = 'none';
    } else {
      document.getElementById('main').style.display = 'unset';
      document.getElementById('modify').style.display = 'none';
      document.getElementById('add').style.display = 'none';
    }     
  });


const addBtn = document.getElementById('addBtn');
addBtn.onclick = () => {
    location.hash = '#add';    
}

document.getElementById('saveBtn').onclick = () => {  
     
    //let id = count - doneCount;
    let text = document.getElementById('addInput').value;
    let li = document.createElement('li');
    li.innerHTML = '<input type="button" value="" class="checkBtn" />' +
                   '<span>' + text + '</span>' +
                   '<input type="button" value="" class="deleteBtn" />'
    //li.style.order = id;
    li.id = count;
    li.lastChild.onclick = deleteHandler;
    document.getElementsByTagName('ul')[0].appendChild(li);
    todoItems[count] = {isDone: false, id: count, description: text};
    location.hash = '';
    document.getElementById('addInput').value = '';
    document.getElementById('todoIsEmpty').style.display = 'none';    
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    count++;
}

document.getElementById('cancelBtn').onclick = () => {
    location.hash = '';    
}

document.getElementById('cancelModify').onclick = () => {
    location.hash = '';    
}

function deleteHandler(e) {
    let li = e.target.parentElement;
    let id = Number(li.id);
    console.log('id ', id);
    document.getElementsByTagName('ul')[0].removeChild(li);
    delete todoItems[id];    
    count--;
    if (count < 0) {
        document.getElementById('todoIsEmpty').style.display = 'block';
    }    
    localStorage.setItem('todoItems', todoItems);
}

window.onload = () => {
    todoItems = localStorage.getItem('todoItems') ? JSON.parse(localStorage.getItem('todoItems')) : [];
    count = todoItems.length;
    if (todoItems.length > 0) {
        document.getElementById('todoIsEmpty').style.display = 'none';
    }   
    for (let i = 0; i < todoItems.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = '<input type="button" value="" class="checkBtn" />' +
                   '<span>' + todoItems[i].description + '</span>' +
                   '<input type="button" value="" class="deleteBtn" />'
    //li.style.order = todoItems[i].id;
    li.lastChild.onclick = deleteHandler;    
    if (todoItems[i].isDone) {
        document.getElementsByTagName('ul')[1].appendChild(li);
    } else {
        document.getElementsByTagName('ul')[0].appendChild(li);
    }
    
    }
}

