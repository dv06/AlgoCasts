// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) 
{
    var anagram = {};
    var lowerStringA = stringA.toLowerCase();
    var lowerStringB = stringB.toLowerCase();
    for(let charA of lowerStringA)
    {
        if(anagram[charA] == undefined)
        {
            anagram[charA] = 1;
            continue;
        }
        anagram[charA]++;
    }
    for(let charB of lowerStringB)
    {
        if((anagram[charB] == undefined || anagram[charB] < 1) && (charB != charB.toUpperCase()))
        {
            return false;
        }
        anagram[charB]--;
    }
    for(let charA of lowerStringA)
    {
        if(charA != charA.toUpperCase() && anagram[charA] > 0)
        {
            return false;
        }
    }
    return true;
}
module.exports = anagrams;
