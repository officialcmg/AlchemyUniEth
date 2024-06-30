const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
	//have an array of all hashes in hex form
	const colorHashesHex = colors.map(color => toHex(sha256(utf8ToBytes(color))));
    //loop over colors array
	for (i = 0; i < colors.length + 1; i++) {
		if (hash == colorHashesHex[i]) {
			return colors[i];
		}
	}
}

module.exports = findColor;

console.log(findColor(toHex(sha256(utf8ToBytes("red")))));
console.log(findColor(toHex(sha256(utf8ToBytes("green")))));
console.log(findColor(toHex(sha256(utf8ToBytes("blue")))));	
console.log(findColor(toHex(sha256(utf8ToBytes("yellow")))));
console.log(findColor(toHex(sha256(utf8ToBytes("pink")))));
console.log(findColor(toHex(sha256(utf8ToBytes("orange")))));