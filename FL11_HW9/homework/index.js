// 0
function getNumbers(str) {
    let numbers = [];
    for (let i=0; i < str.length; i++) {
        if (parseInt(str[i])) {
            numbers.push(parseInt(str[i]));
        }
    }
    return numbers;
}

// 1
function findTypes() {
    let obj = {};
    for (let i = 0; i < arguments.length; i++) {
        if (!obj.hasOwnProperty(typeof arguments[i])) {
            obj[typeof arguments[i]] = 1;
        } else {
            obj[typeof arguments[i]] += 1;
        }        
    }
    return obj;
}

// 2
function executeforEach (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

//3
function mapArray(arr, func) {
    let result = [];
    executeforEach(arr, function(el) {
        result.push(func(el));
    });
    return result;
}

// 4
function filterArray(arr, func) {
    let result = [];
    executeforEach(arr, function(el) {
        if (func(el)) {
            result.push(el);
        }
    });
    return result;
}

// 5
function showFormattedDate(someDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = someDate.getDate();
    const month = months[someDate.getMonth()];
    const year = someDate.getFullYear();
    return `Date: ${month} ${day} ${year}`;
}

// 6
function canConvertToDate(dateString) {
    return !isNaN(Date.parse(dateString));
}

// 7
function daysBetween(date1, date2) {
    const msec = 1000, sec = 60, minutes = 60, hours = 24; 
    const diffInMsec = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInMsec/msec/sec/minutes/hours);
    return diffInDays;        
}

// 8
function getAmountOfAdultPeople(data) {
    const now = new Date();
    const adultInDays = 6570;
    let arr = [];
    let result;
    for (let i=0; i<data.length; i++) {
        arr.push(data[i][' birthday ']);
    }
    result = filterArray(arr, function(el) {
        return daysBetween(new Date(el), now) > adultInDays;
    });
    return result.length;
    
}

//9
function keys(obj) {
    let keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);            
        }        
    }
    return keys;
}


//10
function values(obj) {
    let values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }        
    }
    return values;
}