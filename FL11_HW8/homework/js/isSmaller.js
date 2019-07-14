function isBigger (a, b) {
    return a > b;
}

function isSmaller (a, b) {
    return isBigger (b, a);
}

console.log(isSmaller(5, -1));
