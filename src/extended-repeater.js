const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let result = [];
  let addictionLine = [];
  let obj = {}


  for (let field in options) {

    if (!obj[field]) {
      if (field === 'separator' || field === 'addition' || field === 'additionSeparator') {
        obj[field] = String(options[field])
      } else {
        obj[field] = options[field];
      }
    }
  }


  if (obj["separator"] === undefined) {
    obj["separator"] = '+'
  };


  if (obj["repeatTimes"] === undefined || obj["repeatTimes"] === null) {
    obj["repeatTimes"] = 1;
  }

  
   if (obj["additionRepeatTimes"] === undefined || obj["additionRepeatTimes"] === null) {
    obj["additionRepeatTimes"] = 1;
  }


  if (obj.hasOwnProperty("additionSeparator") === true) {
    let tempArray = [];

    if (obj["additionRepeatTimes"] === 1 || obj["additionRepeatTimes"] === undefined) {

    } else {
      for (let i = 0; i < obj["additionRepeatTimes"]; i++) {
        tempArray.push(obj["addition"]);

      }
      obj["addition"] = tempArray.join(obj["additionSeparator"]);
    }
  }



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
