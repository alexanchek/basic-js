const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members = []) {
  if (members === null) {
    return false;
  }

  let checkElement = "";
  let names = "";

  for (let i = 0; i < members.length; i++) {
    checkElement = members[i];

    switch (typeof checkElement) {
      case "string":
        if (checkElement.split(" ").length > 2) {
          checkElement = checkElement.split(" ").join("");
        }
        names += checkElement.charAt(0).toUpperCase();
    }
  }

  names = names.split("").sort().join("");
  return names;
};
