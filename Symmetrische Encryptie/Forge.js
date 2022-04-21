const crypto = require('crypto');

const algorythm = `aes-192-cbc`;

const password = `password`;

const salt = 'salt';

const keylength = 24;

const shared_key = crypto.scryptSync(password,salt,keylength); // dit is de key die gaat encrypteren en decrypteren, deze geven we mee ana de link

const one_time_code = crypto.randomBytes(16); //random getal dat 16 bytes bevat

const cipher = crypto.createCipheriv(algorythm,shared_key,one_time_code); // dit is het geëncrypteerd bericht dat geëncrypteerd gaat worden door de shared key en de random code.

const decipher = crypto.createDecipheriv(algorythm,shared_key,one_time_code);

let cipher_text

function Encrypt(){

    const message = document.getElementById("text").value;

    cipher.on('readable',() => {

        let _cipher_text = cipher.read();

        if(_cipher_text){

           cipher_text = _cipher_text.toString('hex');

        };

    });

    cipher.write(message);

    cipher.end();   

    };
    function Decrypt(){

        decipher.on('readable',() => {

            let _plain_text = decipher.read();

            if(_plain_text){

                console.log(_plain_text.toString('utf8'));

            };

        });

        decipher.write(cipher_text,'hex');

        decipher.end();

    }   

    Encrypt();
    Decrypt();

//werkt maar heeft geen key

// function encrypt() {
//     var encrypted = CryptoJS.AES.encrypt( //gaat encrypteren op basis van de ingevoerde text en wachtwoord
//       document.getElementById("text").value,
//       document.getElementById("password").value,// haalt het wachtwoord op
//   );
//     document.getElementById("EncryptedValue").innerHTML = encrypted; // het html bestand met het id krijgt encrypted ingevuld.
//     document.getElementById("decrypted").innerHTML = ""; //maak decrypted leeg in het geval er iets staat
//   }
  
  
//   function decrypt() {
//     var decrypted = CryptoJS.AES.decrypt( //gaat decrypteren op basis van de ingevoerde Encrypted Value en wachtwoord, hierdoor moet het wachtwoord en het encrypted value juist ingevuld zijn anders krijgt men niets terug
//       document.getElementById("EncryptedValue").innerHTML,
//       document.getElementById("password").value
//     ).toString(CryptoJS.enc.Utf8);// zorgt ervoor dat het een string teruggeeft
//     document.getElementById("decrypted").innerHTML = decrypted;// het html bestand met het id krijgt de decrypted string terug.
//     document.getElementById("EncryptedValue").innerHTML = "";//maakt html leeg
//   }