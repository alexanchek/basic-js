const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  } else if (
    date.getYear() === null ||
    date.getMonth() === null ||
    date.getDay() === null ||
    date.getHours() === null ||
    date.getMinutes() === null ||
    date.getSeconds() === null ||
    date.getTime() === null
  ) {
    return "FAIL";
  }

  month = date.getMonth();

  switch (true) {
    case month < 2:
      return "winter";
      break;
    case month >= 2 && month < 5:
      return "spring";
      break;
    case month >= 5 && month < 8:
      return "summer";
      break;
    case month >= 8 && month < 11:
      return "autumn";
      break;
    case month >= 11 && month < 13:
      return "winter";
      break;
  }
};
