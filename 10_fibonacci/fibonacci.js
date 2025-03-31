const fibonacci = function (fib) {
    let one = 1;
    let two = 1;
    let result;
    fib = parseInt(fib);
    if (fib < 0) return "OOPS";
    if (fib == 0) return 0;
    if (fib <= 2) return 1;
    for (let i = 2; i < fib; i++) {
        result = one + two;
        one = two;
        two = result;
    }
    return result
};

// Do not edit below this line
module.exports = fibonacci;
