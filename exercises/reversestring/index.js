// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	var s = str.split('');
	var i = 0, j = s.length - 1;
	while(i < j) {
			let temp = s[i];
			s[i] = s[j];
			s[j] = temp;
			i++;
			j--;
	}
	return s.join('');
}

module.exports = reverse;
