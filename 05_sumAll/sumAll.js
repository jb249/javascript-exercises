const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }
    let sum = num1;
    let increase = num1 + 1;
    for (let i = 0; i < (num2 - num1); i++) {
        sum += increase;
        increase += 1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
