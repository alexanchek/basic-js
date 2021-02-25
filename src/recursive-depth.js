const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
		let counter = 1;
    for (let i = 0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) {
      	counter = 1;
        counter+=this.calculateDepth(arr[i]);
      }
    }
   
    return counter;
  }
};