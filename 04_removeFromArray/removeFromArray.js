const removeFromArray = function(array, ...moreArgs) {
    //console.log(array);
    //console.log(moreArgs);
    for (const arg of moreArgs) {
        index = array.indexOf(arg);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    //console.log(array);
    return array;
};

//const array1 = [1,2,3,4];

//removeFromArray(array1, 1,2,3,4);

// Do not edit below this line
module.exports = removeFromArray;
