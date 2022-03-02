// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) 
{
    var maxChar, maxCharCount = 0, countChar = {} ;
    for(var i = 0; i < str.length; i++)
    {
        if (!countChar[str[i]]) 
        {
            countChar[str[i]] = 0;
        }
        countChar[str[i]]++;
    }
    for(var i = 0; i < str.length; i++)
    {
        if (countChar[str[i]] > maxCharCount)
        {
            maxCharCount = countChar[str[i]];
            maxChar = str[i];
        }
    }
    return maxChar;
}

module.exports = maxChar;
