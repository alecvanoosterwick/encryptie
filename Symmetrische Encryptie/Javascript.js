var iv = 

function encrypt() {
  var encrypted = CryptoJS.AES.encrypt( //gaat encrypteren op basis van de ingevoerde text en wachtwoord
    document.getElementById("text").value,// gaat de text ophalen
    document.getElementById("password").value// haalt het wachtwoord op
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
// wachtwoord, encrypteerd bericht slaan we op in een databank.
function iets(){
  var hash = CryptoJS.SHA256("Message");
}