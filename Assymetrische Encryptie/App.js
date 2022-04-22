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
console.log(createLicense("a@example.com"));