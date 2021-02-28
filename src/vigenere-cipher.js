const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    if (value === undefined) {
      this.value = true;
    } else {
      this.value = value;
    }
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error("Something went bad :( Please, check your parameters")
    }
  
    // prepare arrays 
    message = message.toLowerCase().split('');
    key = key.toLowerCase().split('');
  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let resultLine = [];
  
    // every step we add a letter for the future steps. 
    //If it's a letter we will calculate its new position, otherwise we add a space to keys array
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122) {
        key.push(key[i])
  
  
        let formulaVignere = alphabet.indexOf(message[i]) + alphabet.indexOf(key[i]) % 26;
        if (formulaVignere < 25) {
          resultLine.push(alphabet[formulaVignere]);
        } else {
          resultLine.push(alphabet[formulaVignere - 26]);
        }
      } else {
        resultLine.push(String.fromCharCode(message[i].charCodeAt()));
        key.splice(i, 0, ' ');
      }
    }
    if (this.value) {
      return resultLine.join('').toUpperCase();
    } else {
      return resultLine.reverse().join('').toUpperCase();
    }

  }
  

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Something went bad :( Please, check your parameters");
    }

    // prepare arrays
    message = message.toLowerCase().split("");
    key = key.toLowerCase().split("");

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let resultLine = "";

    // every step we add a letter for the future steps.
    //If it's a letter we will calculate its new position, otherwise we add a space to keys array
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122) {
        key.push(key[i]);

        let formulaVignere =
          alphabet.indexOf(message[i]) - (alphabet.indexOf(key[i]) % 26);
        if (formulaVignere > -1) {
          resultLine += alphabet[formulaVignere];
        } else {
          resultLine += alphabet[formulaVignere + 26];
        }
      } else {
        resultLine += String.fromCharCode(message[i].charCodeAt());
        key.splice(i, 0, " ");
      }
    }

    return resultLine.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
