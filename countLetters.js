function countLetters(string) {
	var count = {};
	var foundLetters = [];

	string = string.split(' ').join('');	
	for (var i = 0; i < string.length; i++) {
		foundLetters = Object.keys(count);
		if (foundLetters.includes(string.charAt(i))) {
			count[string.charAt(i)]++;
		} else {
			count[string.charAt(i)] = 1;
		}
	}
	
	console.log(count);
}

countLetters('abcde fffggg');
countLetters('aaaaaabbbbbbbcccccccdef');