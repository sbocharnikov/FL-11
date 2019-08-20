function assign() {    
    for (let i = 1; i < arguments.length; i++) {
        for (let key of Object.keys(arguments[i])) {
            arguments[0][key] = arguments[i][key];
        }
    }    
    return arguments[0];
}

const defaults = { a: 123, b: 777 };
const options = { a: 456 };
const configs = assign({}, defaults, options); // => {a: 456, b: 777}
console.log(configs);