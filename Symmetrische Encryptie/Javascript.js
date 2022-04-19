function uuidv4() {
    return 'xxxxxxxx-xxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function(c) { //gaat alle x veranderen 
      var random = Math.random() * 16 | 0, v = c == 'x' ? random : (random & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  function GenerateUniqueKey(){
      return console.log(uuidv4());
}

encryptor = message => {
    let encryptedMessage;

    const messageArr = message.split(""); //gaat elke letter gaan splitten en elke letter word in de array gestoken
    console.log("message array", messageArr)

    let encryptedMessageArr = [];

    for(i = 0; i < messageArr.length; i++){
        
    }
}

// encrypteren hash variabelen

const crypto = require("crypto");

const algorithm = "aes-192-cbc"; //algorythme waar we mee gaan encrypteren
const password = "Password used to generate key";
const salt = "salt";
const key = crypto.scryptSync(password,salt,24);
const iv = crypto.randomBytes(16);// random 1 keer code;
const cipher = crypto.createCipheriv(algorithm,key,iv);

let cipher_text;

const decipher = crypto.createDecipheriv(algorithm,key,iv);

//functies encrypteren

function Encrypteren(){
  const message = "hallo";

  cipher.on('readable',() => {

    let cipherText = cipher.read();

    if(cipherText){
      cipher_text = cipherText.toString("hex");

    };
  });
  cipher.write(message);
  cipher.end();

};

function Decrypteren(){

  decipher.on('readable',() => {

      let plainText = decipher.read();

      if(_plain_text){

          console.log(plainText.toString('utf8'));

      };

  });

  decipher.write(cipherText,'hex');

  decipher.end();

};
function showEncrypt(){
  console.log(Encrypteren());
};
function showDecrypt(){
  console.log(Decrypteren());
};