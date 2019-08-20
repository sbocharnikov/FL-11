function create(obj) {
    const newObj = {};    
    Object.setPrototypeOf(newObj, obj);
    return newObj;
}


const obj1 = { prop: 5 };
const obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1); // => true
console.log(obj2.prop); // => 5