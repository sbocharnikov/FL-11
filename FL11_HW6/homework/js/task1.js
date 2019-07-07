let a1 = Number(prompt('Please input a1'));
let a2 = Number(prompt('Please input a2'));
let b1 = Number(prompt('Please input b1'));
let b2 = Number(prompt('Please input b2'));
let c1 = Number(prompt('Please input c1'));
let c2 = Number(prompt('Please input c2'));
const N = 2; 
let isHalf = c1 === (a1+b1)/N && c2 === (a2+b2)/N;
console.log(isHalf);