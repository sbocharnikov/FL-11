function reverseNumber (num) {
    let sign = 1, revNum = 0;
    if (num < 0) {
        sign = -1;
        num *= -1;
    }

    while (num > 0) {
        revNum *= 10;
        revNum += num % 10;        
        num = Math.trunc(num / 10);

    }

    return sign * revNum;
}

console.log(reverseNumber(-456));