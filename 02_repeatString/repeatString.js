const repeatString = function(word, times) {
    if (times < 0) return 'ERROR';
    let combinedString = '';
    for(let i = 0; i<times; i++){
        combinedString += word;
    }
    return combinedString;
};

// Do not edit below this line
module.exports = repeatString;
