function countLetters(string) {
	var count = {};
	var foundLetters = [];

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

countLetters('abcdefffggg');
countLetters('aaaaaabbbbbbbcccccccdef');