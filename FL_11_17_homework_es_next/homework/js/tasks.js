function maxElement(arr) {
  return arr.reduce((elem, max) => Math.max(elem, max));
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
  const set = new Set();
  arr.forEach(element => {
    set.add(element);
  });
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
    .then(arr => {
      const newArr = [];
      arr.forEach(el => newArr.push(el.name));
      return newArr.sort();
    })
    .catch(error => console.log(error));
}

async function namesTask9(url) {
  try {
    const req = await fetch(url);
    const arr = await req.json();
    const newArr = [];
    arr.forEach(el => newArr.push(el.name));
    return newArr.sort();
  } catch (error) {
    console.log(error);
  }
}

//namesTask8(url).then(res => console.log(res));
//namesTask9(url).then(res => console.log(res));
