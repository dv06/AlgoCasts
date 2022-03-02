// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) 
{
    var s = 0, isNegative = false, r;
    if (n < 0)
    {
        isNegative = true;
        n = n * -1;
    }
    
    while(Math.floor(n/10) > 0)
    {
        r = n % 10;
        s = s * 10 + r;
        n = Math.floor(n/10);
    }
    s = s *  10 + n; 
    return isNegative === true? -1 * s : s;
}

module.exports = reverseInt;
