const sumAll = function (start, stop) {
    let sum = 0;
    if (start < 0 ||
        stop < 0 ||
        !Number.isInteger(start) ||
        !Number.isInteger(stop))
        return "ERROR";
    if (start > stop) {
        let temp = start;
        start = stop;
        stop = temp;
    }
    for (let integer = start; integer <= stop; integer++) {
        sum += integer;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
