
const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // Adjust the key length as needed for security.
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

// Save the privateKey securely as you'll need it for decryption.
const messageToEncrypt = 'Your secret message here';
const encryptedMessage = crypto.publicEncrypt(publicKey, Buffer.from(messageToEncrypt));

// Store the `encryptedMessage` in the database.
const crypto = require('crypto');
const fs = require('fs'); // For reading the private key from a file.

const privateKey = fs.readFileSync('path-to-your-private-key.pem', 'utf8'); // Load your private key.

const encryptedMessageFromDatabase = ...; // Retrieve the encrypted message from the database.

try {
  const decryptedMessage = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    },
    encryptedMessageFromDatabase
  );

  console.log('Decrypted Message:', decryptedMessage.toString());
} catch (error) {
  console.error('Error decrypting the message:', error.message);
}
