// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) 
{
    var maxChar, maxCharCount = 0, countChar = new Array(256).fill(0); ;
    for(var i = 0; i < str.length; i++)
    {
        countChar[str.charCodeAt(i)]++;
    }
    for(var i = 0; i < str.length; i++)
    {
        if (countChar[str.charCodeAt(i)] > maxCharCount)
        {
            maxCharCount = countChar[str.charCodeAt(i)];
            maxChar = str[i];
        }
    }
    return maxChar;
}

module.exports = maxChar;
