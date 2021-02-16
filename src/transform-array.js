const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  arrCopy=[...arr]

  for (let i = 0; i < arrCopy.length; i++) {
    keywords = arrCopy[i];

    switch (true) {
      case keywords === '--discard-next' && arrCopy[i + 1] != undefined:
        arrCopy.splice(i, 2);
        break;
      case keywords === '--discard-prev' && arrCopy[i - 1] != undefined:
        arrCopy.splice(i - 1, 2);
        break;
      case keywords === '--double-next' && arrCopy[i + 1] != undefined:
        arrCopy.splice(i, 1, arrCopy[i + 1]);
        break;
      case keywords === '--double-prev' && arrCopy[i - 1] != undefined:
        arrCopy.splice(i, 1, arrCopy[i + 1]);
        break;
      case keywords === '--discard-next' && arrCopy[i + 1] === undefined:
        arrCopy.splice(i, 1);
        break;
      case keywords === '--discard-prev' && arrCopy[i - 1] === undefined:
        arrCopy.splice(i, 1);
        break;
      case keywords === '--double-next' && arrCopy[i + 1] === undefined:
        arrCopy.splice(i, 1);
        break;
      case keywords === '--double-prev' && arrCopy[i - 1] === undefined:
        arrCopy.splice(i, 1);
        break;
    }
  }

  return arrCopy;
  
}