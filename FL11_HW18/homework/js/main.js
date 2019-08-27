const select = document.getElementById('select');
const output = document.getElementById('output');
const message = document.getElementById('message');
const getBtn = document.getElementById('get');
const putBtn = document.getElementById('put');
const deleteBtn = document.getElementById('delete');
const showBtn = document.getElementById('showUserPosts');
const loader = document.getElementById('loader');
const img = document.getElementsByTagName('img')[0];

let users;

getBtn.onclick = async () => {
  loader.style.display = 'block';
  users = await fetch('https://jsonplaceholder.typicode.com/users');
  users = await users.json();
  for (obj of users) {
    let option = document.createElement('option');
    option.value = obj.id;
    option.innerHTML = obj.username;
    option.id = obj.id;
    select.appendChild(option);
  }
  message.innerHTML = `We've got ${users.length} users. Select user in dropdown to see user info, edit user info or delete user.`;
  loader.style.display = 'none';
  select.value = 0;
};

select.onchange = function(e) {
  const id = Number(select.value) - 1;
  let str = users[id];
  output.innerHTML = JSON.stringify(str, null, '  ');
  img.src = `http://s.tcdn.co/ab4/d1a/ab4d1a6b-1225-30cc-b747-2497eefb6ced/192/${id + 1}.png`;
};

putBtn.onclick = async () => {
  loader.style.display = 'block';
  const id = Number(select.value);
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: 'PUT',
      body: output.value,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
  );
  response = await response.json();
  console.log(response);
  loader.style.display = 'none';
};

deleteBtn.onclick = async () => {
  loader.style.display = 'block';
  const id = Number(select.value);
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: 'DELETE'
    }
  );
  response = await response.json();
  console.log(response);
  loader.style.display = 'none';
};

showBtn.onclick = async () => {
  loader.style.display = 'block';
  const id = Number(select.value);
  let [posts, comments] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
    fetch(`https://jsonplaceholder.typicode.com/comments?userId=${id}`)
  ]);
  posts = await posts.json();
  comments = await comments.json();

  let postsOutput = document.getElementById('postsOutput');
  for (post of posts) {
    let str = JSON.stringify(post, null, '\t');
    postsOutput.innerHTML +=
      str
        .replace(/\n/g, '<br/>')
        .replace(/\\n/g, ' ')
        .replace(/\t/g, '&nbsp;&nbsp;') + '<br/>';
  }
  loader.style.display = 'none';
};
