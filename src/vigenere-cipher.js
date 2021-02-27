const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Something went bad :( Please, check your parameters")
    }

    message = message.split('');
    let codeLine = [];

    for (let i=0; i<message.length; i++) {

    }


  }    
  decrypt() {
    if (!message || !key) {
      throw new Error("Something went bad :( Please, check your parameters")
    }
}}

module.exports = VigenereCipheringMachine;
