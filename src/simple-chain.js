const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  
  removeLink(position) {
  	if (this.chain[position] != undefined) {
    	    this.chain.splice(position,1);
   				 return this;
    } else {
    	throw new Error ("Sorry, this is a wrong position!")
    }

  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
  	let finalChain = this.chain.join('~~');
    this.chain = [];
    return finalChain;

  }
};
module.exports = chainMaker;
