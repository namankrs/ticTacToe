const {equal, deepEqual} = require("assert");

const { randomNumberGenerator,
       deleteElement,symbol,isSubset
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


describe('symbol',function(){
  symbolToggler = symbol();
  it('should return O for the odd calls and X for the even calls',function(){
    equal(symbolToggler(),"O");
    equal(symbolToggler(),"X");
    equal(symbolToggler(),"O");
    equal(symbolToggler(),"X");

  })
})

describe('isSubset',function(){
  it('should return true if superset contains subset',function(){
    deepEqual(isSubset([1,2,3],[[4,5,6],[1,2,3]]),true);
  })
  it('should return false if superset doesnt contains subset',function(){
    deepEqual(isSubset([1,2,3],[[1,2,5],[2,3,4]]),false);
  })
})
