const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  arrCopy = [...arr];

  for (let i = 0; i < arrCopy.length; i++) {
    keywords = arrCopy[i];

    switch (true) {
      case keywords === "--discard-next" && arrCopy[i + 1] != undefined:
        arrCopy.splice(i, 2);
        if (i === 0) {
          break;
        }
        if (arrCopy[i] === "--double-prev") {
          arrCopy.splice(i, 1);
        }
        break;
      case keywords === "--discard-prev" && arrCopy[i - 1] != undefined:
        arrCopy.splice(i - 1, 2);
        break;
      case keywords === "--double-next" && arrCopy[i + 1] != undefined:
        arrCopy.splice(i, 1, arrCopy[i + 1]);
        if (arrCopy[i + 2] === "--double-prev") {
          let temp = arrCopy[i];
          arrCopy.splice(i, 3, temp, temp, temp);
        }
        break;
      case keywords === "--double-prev" && arrCopy[i - 1] != undefined:
        arrCopy.splice(i, 1);
        break;
      case keywords === "--discard-next" && arrCopy[i + 1] === undefined:
        arrCopy.splice(i, 1);
        break;
      case keywords === "--discard-prev" && arrCopy[i - 1] === undefined:
        arrCopy.splice(i, 1);
        break;
      case keywords === "--double-next" && arrCopy[i + 1] === undefined:
        arrCopy.splice(i, 1);
        break;
      case keywords === "--double-prev" && arrCopy[i - 1] === undefined:
        arrCopy.splice(i, 1);
        break;
    }
  }

  return arrCopy;
};
