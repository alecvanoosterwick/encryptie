var rsa = require("node-rsa");
var fs = require("fs");

var publicKey = new rsa();
var privateKey = new rsa();

var public = fs.readFileSync("./Keys/public.pem","utf8");
var private = fs.readFileSync("./Keys/private.pem","utf8");

publicKey.importKey(public);
privateKey.importKey(private);

function createLicense(mail) {
    const saltFirst = "hierkomteenrandomstring123456789";
    const saltSecond = "hierkomteenrandomstring987654321";

    const encrypted = privateKey.encryptPrivate(
        saltFirst + mail + saltSecond,
        "base64"
        );
    return encrypted;
}
console.log(createLicense("iets"));

function CheckValidity(licence){
    const decrypted = publicKey.decryptPublic(licence,"utf8")

    if("hierkomteenrandomstring123456789ietshierkomteenrandomstring987654321" == decrypted){
    return true
    }
    else{
        return false
    }
    
}
console.log(
    CheckValidity(
        "tfR6XEBI0oLO3GCIzH8E+UtreIhqZo6DPA31impWZpROTLJQaHdSa9vL2cEIzLuAEPVCzvR7jfI9f3q/mYAjSWl/cuLlouK8RNYy6UtaNS7oyN9QAm97313TX+lHzH6usJPDK0sc4fgCPPcQ7XGpINCWGxtMMXOT0JuddmAROM/wNx9XOdCZu6Baf3Up7wv9nrB1GqawJQEYHyPUiOjcbOMBL63PioyowmtUERdF/P9SCwaOyVOIg5ZOWqqLPv8XkqR+AH3bRO6kv4vnEppQUfxJtDfRIeJrfTwmRO+PDO9l5tnUHdAbPEQB7U5LD5obpFuIQbpz4dF2SGBjjP1UA=="
                 )
            );
    