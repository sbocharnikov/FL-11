function formatTime(num) {
    let days, hours, minutes;
    minutes = num % 60;
    num = Math.trunc(num / 60);
    hours = num % 24;
    num = Math.trunc(num / 24);
    days = num;
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

console.log(formatTime(3601));