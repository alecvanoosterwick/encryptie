const NodeRSA = require('node-rsa');

// const key = new NodeRSA({b : 1024});
let message ="this is a non readable secret key";

// var encryptedString = key.encrypt(message,'base64');
// console.log(encryptedString);

// var decryptedString = key.decrypt(encryptedString, 'utf8');
// console.log(decryptedString)

// var public_key = key.exportKey('public'); //maakt een public key aan 
// var private_key = key.exportKey('private'); //maakt een private key aan 

var public_key = '-----BEGIN PUBLIC KEY-----\n' +
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCUQzBLPc6U35ZhquP2VkeGYeu9\n' +
'YF08N4jO1Wxnb6XGZmM4pCTS+PwcfSGiifPsAbgmnB6PHj6uChtwvYZqUfpFL5wI\n' +
'EQPIvmsTMx8WwvQppmWa3pCOR6Ejvt7RUi+31WYVTzPWxAY6iowEZHANkOGiEqFY\n' +
'FOc4yuiY1lH6cITekwIDAQAB\n' +
'-----END PUBLIC KEY-----';

var private_key = '-----BEGIN RSA PRIVATE KEY-----\n' +
'MIICXAIBAAKBgQCUQzBLPc6U35ZhquP2VkeGYeu9YF08N4jO1Wxnb6XGZmM4pCTS\n' +
'+PwcfSGiifPsAbgmnB6PHj6uChtwvYZqUfpFL5wIEQPIvmsTMx8WwvQppmWa3pCO\n' +
'R6Ejvt7RUi+31WYVTzPWxAY6iowEZHANkOGiEqFYFOc4yuiY1lH6cITekwIDAQAB\n' +
'AoGBAIbj4kpyf0M/cWiGvEThFs4SxRJVXD5vIE9eKfSpxZ+Og/OCk+ZGlcmtpy5k\n' +
'aMJuhgbKv5rin5BkrbaTGHoe/50O04H9XPpUcwKw22HrWmW9DZIIZm997S5UrkP3\n' +
'bfmnI0lkx8tE6cscPx4BYXVTdOqNgdrNFfhAgslz0ZrVTBsxAkEA6BS53Q1bmfB4\n' +
'IcC0dUbol6aHChL/zzii19MErFcs9TahgFTDTy9JHatU01gZSej9UUyboiJt/ZNL\n' +
'K40JfcY15wJBAKOK+iassTrrUg3qnNY9pWOJN01vMPDT0itM61sSXs2d1YsdsO+0\n' +
'VE+3OjVCacafWUrFP5dja4mUFQIlBn0gZHUCQBBrrv7p/Ao3Tnis5tfJbZmVSca3\n' +
's2vZCQSWRKVhAahT9jdbR/ppURYNUlIl0Jw/JPVEo1pkbz3a1x28u+gvRw8CQBvv\n' +
'spmGqGOzLPoZmJ70OttM5jiBBPAujtk8s3uEINOo4YB5Gu9nc3uGhhfw91apg7xF\n' +
'A37dydHfjNMn9frL3L0CQFRho/41+p4Epm9zW15n44YXieCz+JoIO4ClDXRgKpVs\n' +
'bv6I4jdGVlfHH/4PPcsRcZDxiNTCtlMREbpYpNNRPI8=\n' +
'-----END RSA PRIVATE KEY-----'

console.log("dit is de private key voor" + private_key);
console.log("dit is de public key voor" + public_key);

let key_private = new NodeRSA(private_key);
let key_public = new NodeRSA(public_key);

console.log("dit is de private key na" + key_private);
console.log("dit is de public key na" + key_public);

//pubk voor encryptie
var encryptedString = key_public.encrypt(message,'base64');
console.log(encryptedString);

//privk voor decryptie
var decryptedString = key_private.decrypt(encryptedString,'utf8');
console.log(decryptedString);
