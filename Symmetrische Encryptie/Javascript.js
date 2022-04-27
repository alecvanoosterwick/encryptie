const iv = CryptoJS.enc.Hex.parse('fedcba0987654321fedcba0987654321');

function encrypteer() {
  var key = CryptoJS.enc.Hex.parse(getRanHex(32));

  var msg = document.getElementById("text").value;
  console.log("this is the message: " + msg)
  console.log(key)

  var enc = CryptoJS.AES.encrypt(msg,key,{
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  document.getElementById("EncryptedValue").innerHTML = enc //gaat het geëncypteerd bericht tonen
  document.getElementById("key").innerHTML = key //gaat het encryptiesleutel tonen
}

function decrypteer() {
  var encryptedMessage = document.getElementById("EncryptedValue").innerHTML;
  var key = document.getElementById("key").innerHTML; //krijgt een string terug
  var hexkey = stringToHex(key)

  var decrypt = CryptoJS.AES.decrypt(encryptedMessage,hexkey);
  document.getElementById("decrypted").innerHTML = decrypt;//toont het bericht
  
}

const getRanHex = size => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let i = 0; i < size; i++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  console.log(result)
  return result.join('');
}
function stringToHex(key){
  let result = [];

  for (let i = 0; i < key.length; i++) {
    result.push(key[i] = " " + key[i]);
  }
  console.log("Dit is de sleutel waar men mee gaat encrypteren: " + result)

  return result.join('');
}

//dit maakt een random 16 bit hexa getal aan. Die we nodig hebben voor een random Encryptie sleutel





// wachtwoord, encrypteerd bericht slaan we op in een databank.
// het probleem hier is dat er geen random code aangemaakt word waarmee er geëncrypteerd word.