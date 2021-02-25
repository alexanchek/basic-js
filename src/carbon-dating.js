const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity != 'number' || sampleActivity != 'string' )  {
    return false;
  }

  floatActivity = parseFloat(sampleActivity);
  
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log2(MODERN_ACTIVITY / floatActivity) / k);
  return t;
};
