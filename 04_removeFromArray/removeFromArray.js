const removeFromArray = function (array, ...value) {
    for (let index = 0; index < array.length; index++) {
        if (value.includes(array[index])) {
            array.splice(index, 1);
            index--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
