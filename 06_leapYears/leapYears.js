const leapYears = function(year) {
    //console.log(year % 400 == 0);
    //console.log(year % 4 == 0 && year % 100 != 0);
    if (year % 400 == 0) {
        return true;
    } else if (year % 4 == 0 && year % 100 != 0) {
        return true;
    } else {
        return false;
    }
};
//leapYears(1996)
//leapYears(2000)

// Do not edit below this line
module.exports = leapYears;
