function encrypt() {
  var encrypted = CryptoJS.AES.encrypt(
    document.getElementById("text").value,
    document.getElementById("password").value
  );
  document.getElementById("EncryptedValue").innerHTML = encrypted;
  document.getElementById("decrypted").innerHTML = "";
  console.log(encrypted)
}
function decrypt() {
  var decrypted = CryptoJS.AES.decrypt(
    document.getElementById("EncryptedValue").innerHTML,
    document.getElementById("password").value
  ).toString(CryptoJS.enc.Utf8);
  document.getElementById("decrypted").innerHTML = decrypted;
  document.getElementById("EncryptedValue").innerHTML = "";
}