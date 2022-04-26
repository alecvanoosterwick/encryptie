const NodeRSA = require('node-rsa');
var fs = require("fs");

function Encrypteer(){
GeneratePair();

let message =  "hey";//is het bericht dat geëncrypteerd moet worden

var publicKey = new NodeRSA();  //maakt een lege key aan
var privateKey = new NodeRSA(); 

var public = fs.readFileSync("./Keys/public.pem","utf8");   //dit gaat de public key ophalen in het pem bestand
var private = fs.readFileSync("./Keys/private.pem","utf8"); //dit gaat de private key ophalen in het pem bestand

publicKey.importKey(public); //vult de lege key in 
privateKey.importKey(private);

//pubk voor encryptie
var encryptedString = publicKey.encrypt(message,'base64');
console.log(encryptedString);

//privk voor decryptie
var decryptedString = privateKey.decrypt(encryptedString,'utf8');
console.log(decryptedString);

}

function GeneratePair() { //deze functie gaat ervoor zorgen als die opgeroepen word dat het nieuwe private key en public key gaat genereren
    var key = new NodeRSA().generateKeyPair(); //genereert nieuwe unieke keys 

    var publicKey = key.exportKey("public"); //exporteert de public key
    var privateKey = key.exportKey("private"); //exporteert de private key

    fs.openSync("./Keys/public.pem","w");
    fs.writeFileSync("./Keys/public.pem",publicKey, "utf8"); //gaat de public key wegschrijven in het pem bestand

    fs.openSync("./Keys/private.pem","w");
    fs.writeFileSync("./Keys/private.pem",privateKey, "utf8"); //gaat de private key wegschrijven in het pem bestand
}

Encrypteer();