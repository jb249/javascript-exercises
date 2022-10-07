function repeatString(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    runningString = "";
    for (let i = 0; i < num; i++) {
        runningString = runningString.concat(string);
    }
    return runningString;
};

// Do not edit below this line
module.exports = repeatString;
