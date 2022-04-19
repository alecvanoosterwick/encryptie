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
