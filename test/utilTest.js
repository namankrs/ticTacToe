const {equal, deepEqual} = require("assert");

const { randomNumberGenerator,
} = require("../src/util.js");

describe("test for randomNumberGenerator function",function(){

  it("should give an integer number from 1 to 9",function(){
    deepEqual(typeof(randomNumberGenerator()),typeof(1));
  });
});

