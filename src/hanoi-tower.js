const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turns = Math.pow(2, disksNumber) - 1;

  speed = turnsSpeed / 3600;

  seconds = Math.floor(turns / speed);

  return (answer = {
    turns: this.turns,
    seconds: this.seconds,
  });
};
