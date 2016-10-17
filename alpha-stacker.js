var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var myVar = '';
function stackLetters (theAlphabetArray) {
	for (var i = 0; i < alphabet.length ; i += 1) {
		myVar = myVar + alphabet[i];
		if (i % 3) {
			myVar += " ";
		}
		console.log(myVar);
	}
}
console.log( stackLetters(alphabet) );