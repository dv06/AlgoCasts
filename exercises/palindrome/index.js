// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(s)
{
	var i = 0, j = s.length - 1, isPallindrome = true;
    while(i < j) 
    {
        if (s[i] ===s[j])
        {
            i++;
			j--;
            continue;
        }
        isPallindrome = false;
        break;
    }
    return isPallindrome;
}

module.exports = palindrome;
