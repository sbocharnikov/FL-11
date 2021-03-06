function maxElement(arr) {
  return Math.max(...arr);
}

function copyArray(arr) {
  return [...arr];
}

function addUniqueId(obj) {
  let id = Symbol();
  return { id, ...obj };
}

function regroupObject({ name, details: { id, age, university } }) {
  return { university, user: { age, firstName: name, id } };
}

function findUniqueElements(arr) {
  const set = new Set(arr);  
  return Array.from(set);
}

function hideNumber(phoneNum) {
  const len = phoneNum.length;
  return phoneNum.slice(len - 4, len).padStart(len, '*');
}

const required = function() {
  throw new Error('Missing property');
};

function add(param1 = required(), param2 = required()) {
  console.log(param1 + param2);
}

const url = 'https://jsonplaceholder.typicode.com/users';

function namesTask8(url) {
  return fetch(url)
    .then(request => request.json())
    .then(arr => arr.map(el => el.name).sort())    
    .catch(error => console.log(error));
}

async function namesTask9(url) {
  try {
    const req = await fetch(url);
    const arr = await req.json();    
    return arr.map(el => el.name).sort();    
  } catch (error) {
    console.log(error);
  }
}

//namesTask8(url).then(res => console.log(res));
//namesTask9(url).then(res => console.log(res));
