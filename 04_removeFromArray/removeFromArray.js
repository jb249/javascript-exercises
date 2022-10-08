const removeFromArray = function(array, item1) {
    index = array.indexOf(item1);
    if (index > 0) {
        array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
