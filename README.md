# Hashing Messages

In ECDSA (Elliptic Curve Digital Signature Algorithm), the first step is to hash the message before applying the signature algorithm. For instance, if you wanted to sign a message with one of your key pairs stating "Vote Yes on Proposal 327", the first step would be to hash this message:

```javascript
// Turn the message into an array of bytes, the expected format for the hash algorithm
const bytes = utf8ToBytes("Vote Yes on Proposal 327");
// Hash the message using keccak256
const hash = keccak256(bytes);

console.log(toHex(hash)); // 928c3f25193b338b89d5646bebbfa2436c5daa1d189f9c565079dcae379a43be
```
## Signing Messages with ECDSA

After we have the message hash, we can sign it with our private key to prove that a particular address votes yes on proposal 327. You may have found yourself doing something similar if you have ever signed a message in web3. When you send a transaction to a blockchain, you also sign a hashed representation of that transaction before sending it to a blockchain node.

### Your Goal: Hash the Message

The noble-secp256k1 library (v 1.7.1) provides us with all of the cryptography we're going to need throughout this course. Let's make use of the `keccak256` hash and `utf8ToBytes` function.

Please note, this tutorial will require functions documented in release version 1.7.1 of the noble-secp256k1 library. Any further links in this tutorial will link directly to version 1.7.1 of the noble-secp256k1 documentation.

Your first step is to take the string message passed in and turn it into an array of UTF-8 bytes using the `utf8ToBytes` function. Then, take the `keccak256` hash of those bytes and return this value.

## Modify this code
```javascript
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    const bytes = utf8ToBytes(message)
    const hash = keccak256(bytes)
    return hash
}

module.exports = hashMessage;
```

