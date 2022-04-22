var rsa = require('node-rsa');
var fs = require("fs");

function GeneratePair() { //deze functie gaat ervoor zorgen als die opgeroepen word dat het nieuwe private key en public key gaat genereren
    var key = new rsa().generateKeyPair(); //genereert nieuwe unieke keys 

    var publicKey = key.exportKey("public"); //exporteert de public key
    var privateKey = key.exportKey("private"); //exporteert de private key

    fs.openSync("./Keys/public.pem","w");
    fs.writeFileSync("./Keys/public.pem",publicKey, "utf8"); //gaat de public key wegschrijven in het pem bestand

    fs.openSync("./Keys/private.pem","w");
    fs.writeFileSync("./Keys/private.pem",privateKey, "utf8"); //gaat de private key wegschrijven in het pem bestand
}

GeneratePair();