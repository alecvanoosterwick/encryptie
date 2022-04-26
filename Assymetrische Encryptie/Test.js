var rsa = require('node-rsa');

var pubKey= "";
var priKey ="";

function GeneratePair(pubKey,priKey) { //deze functie gaat ervoor zorgen als die opgeroepen word dat het nieuwe private key en public key gaat genereren
    var key = new rsa().generateKeyPair(); //genereert nieuwe unieke keys 

     pubKey = key.exportKey("public"); //exporteert de public key
     priKey = key.importKey({
         k: Buffer.from('./Keys/public.pem','hex')
     }, 'components'); //exporteert de private key
    console.log(priKey)
    
}
console.log(pubKey);
console.log(priKey);  

GeneratePair();