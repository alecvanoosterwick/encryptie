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