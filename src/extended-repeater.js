const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let result = [];
  let addictionLine = [];
  let obj = {}

// check a field and create our own object with fields
  for (let field in options) {
    if (!obj[field]) {
      if (field === 'separator' || field === 'addition' || field === 'additionSeparator') {
        obj[field] = String(options[field])
      } else {
        obj[field] = options[field];
      }
    }
  }

  // separator by default
  if (obj["separator"] === undefined) {
    obj["separator"] = '+'
  };

  // repeat times if it's undefined
  if (obj["repeatTimes"] === undefined || obj["repeatTimes"] === null) {
    obj["repeatTimes"] = 1;
  }

   if (obj["additionRepeatTimes"] === undefined || obj["additionRepeatTimes"] === null) {
    obj["additionRepeatTimes"] = 1;
  }

  // if we have addition Separator, then prepare separator
  if (obj.hasOwnProperty("additionSeparator") === true) {
    // create a temp array to join it with addition seperator
    let tempArray = [];

    if (obj["additionRepeatTimes"] === 1 || obj["additionRepeatTimes"] === undefined) {
    } else {
      for (let i = 0; i < obj["additionRepeatTimes"]; i++) {
        tempArray.push(obj["addition"]);
      }
      obj["addition"] = tempArray.join(obj["additionSeparator"]);
    }
  }

  // final preparing of the line
  for (let i = 0; i < obj["repeatTimes"]; i++) {
    let temp = '';
   
    if (obj.hasOwnProperty("addition") === true) {
      temp = str + obj["addition"];
    } else {
      temp = str;
    }

    result.push(temp);
    temp = str;
  }

  return result.join(obj["separator"]);
}
