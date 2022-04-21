var encryptionkey = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef')
console.log(encryptionkey);
const iv = CryptoJS.enc.Hex.parse('fedcba0987654321fedcba0987654321');

function encrypteer() {
  var key = CryptoJS.enc.Hex.parse(getRanHex(32));
  var msg = document.getElementById("text").value;

  var enc = CryptoJS.AES.encrypt(msg,key,{
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  console.log(key)

console.log(enc.ciphertext.toString(CryptoJS.enc.Hex));
document.getElementById("EncryptedValue").innerHTML = enc
}


function decrypteer() {
  var encryptedMessage = document.getElementById("EncryptedValue").innerHTML;
  var key = document.getElementById("key").innerHTML;

  var decrypt = CryptoJS.AES.decrypt(encryptedMessage,key)
    .toString(CryptoJS.enc.Utf8)
  document.getElementById("decrypted").innerHTML = decrypted;
  
}


const getRanHex = size => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let i = 0; i < size; i++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join('');
}


// wachtwoord, encrypteerd bericht slaan we op in een databank.
// het probleem hier is dat er geen random code aangemaakt word waarmee er geëncrypteerd word.