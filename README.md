## Signing the Hash

It's time to sign a message using our private key to prove our intention!

When signing a message with secp256k1 we can return the signature along with the recovery bit, allowing us to recover the public key from the signature. This will allow a blockchain node to take a signature of a transaction and understand which address authenticated this particular transaction.

This is an important point: a blockchain transaction not only indicates the intent of the person who signed it, it also authenticates them through public key cryptography! We'll see this more clearly when we start signing transactions in future lessons.

### Your Goal: Sign Message

Let's sign a message!

First step is to hash it using the `hashMessage` function you created in the last stage (we've already imported it for you on line 2).

Once you have the message hash, use the `sign` method from the `noble-secp256k1` library.

#### Note

- The `sign` method will take your message hash along with the constant `PRIVATE_KEY` declared at the top of the file. This private key is a valid key that could be used to authorize blockchain transactions. Never use this specific key because it is published on the internet, so many people including yourself could authenticate with this specific private key. In future lessons, we'll be discussing good private key hygiene to avoid losing funds.
- The `sign` method takes an optional third parameter called `options`, which you'll see in the documentation. Use this parameter to return the recovered bit so that the public key can be recovered from this signature.

Take a look in the details tab if you need a hint!

### Details

Using options to return a recoveryBit:
The syntax for the third optional parameter of the `secp.sign` function is a little tricky to get right... here's how to properly use the third parameter in order to return a recoveryBit from the signature process - which will later be used to recover a public key using just the `messageHash`, signature, and recoveryBit:

```javascript
return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
```
Just include the third paramater in an object that has the recovered key set to true. ✅
