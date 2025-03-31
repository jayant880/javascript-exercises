const leapYears = function (year) {
    // divisible by 4
    let divBy4 = (year % 4 == 0);
    // divisible by 100 is not leap year
    let divBy100 = (year % 100 == 0);
    // unless divisible by 400
    let divBy400 = (year % 400 == 0);

    if (divBy4 && (!divBy100 || divBy400)) return true;
    return false;

};

// Do not edit below this line
module.exports = leapYears;
