const palindromes = function (string/*: String*/) {
    let newString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseString = newString.split('').reverse().join('');
    return newString == reverseString;
};

// Do not edit below this line
module.exports = palindromes;
