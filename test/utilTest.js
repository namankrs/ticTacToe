const {equal, deepEqual} = require("assert");

const { randomNumberGenerator,
       deleteElement,
} = require("../src/util.js");


describe("test for randomNumberGenerator function",function(){

  it("should give an integer number from 1 to 9",function(){
    deepEqual(typeof(randomNumberGenerator()),typeof(1));
  });
});

describe("test for deleteElement function",function(){

  it("should return an array after deleting the element from the given index",function(){
    deepEqual(deleteElement([1,2,3,4],1),[1,3,4]);
  });
});

