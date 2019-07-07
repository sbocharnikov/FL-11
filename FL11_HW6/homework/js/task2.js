let a = Number(prompt('Please input a'));
let b = Number(prompt('Please input b'));
let c = Number(prompt('Please input c'));
if (a+b>=c && a+c>=b && b+c>=a) {
    if (a===b && b===c) {
        console.log('Equivalent triangle');
    } else if (a===b || a===c || b===c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn\'t exist');
}