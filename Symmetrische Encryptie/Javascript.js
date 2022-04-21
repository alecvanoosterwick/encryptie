const getRanHex = size => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm','n'];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join('');
}


const iv = CryptoJS.enc.Hex.parse('fedcba0987654321fedcba0987654321');

 // gaat de text ophalen

function encrypt() {
  var encrypted = CryptoJS.AES.encrypt( //gaat encrypteren op basis van de ingevoerde text en wachtwoord
    document.getElementById("text").value,
    document.getElementById("password").value,// haalt het wachtwoord op
);
  document.getElementById("EncryptedValue").innerHTML = encrypted; // het html bestand met het id krijgt encrypted ingevuld.
  document.getElementById("decrypted").innerHTML = ""; //maak decrypted leeg in het geval er iets staat
}


function decrypt() {
  var decrypted = CryptoJS.AES.decrypt( //gaat decrypteren op basis van de ingevoerde Encrypted Value en wachtwoord, hierdoor moet het wachtwoord en het encrypted value juist ingevuld zijn anders krijgt men niets terug
    document.getElementById("EncryptedValue").innerHTML,
    document.getElementById("password").value
  ).toString(CryptoJS.enc.Utf8);// zorgt ervoor dat het een string teruggeeft
  document.getElementById("decrypted").innerHTML = decrypted;// het html bestand met het id krijgt de decrypted string terug.
  document.getElementById("EncryptedValue").innerHTML = "";//maakt html leeg
}

function iets() {
  const enc = CryptoJS.AES.encrypt(document.getElementById("text").value, document.getElementById("password").value, getRanHex(32),{
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  console.log(getRanHex(32))

console.log(enc.ciphertext.sigBytes);
console.log(enc.ciphertext.toString(CryptoJS.enc.Hex));
}


function decryptIets() {
  
}




// wachtwoord, encrypteerd bericht slaan we op in een databank.
// het probleem hier is dat er geen random code aangemaakt word waarmee er geëncrypteerd word.