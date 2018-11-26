let {deepEqual,equal} = require("assert");
let {generateBoard,placeMoves} = require("../src/lib.js");

describe('generateBoard',function(){
  it("should return filled board with given elements",function(){
    let expectedOutput = ["_0_|_1_|_2_",
                          "_3_|_4_|_5_",
                          " 6 | 7 | 8 "]
    deepEqual(generateBoard([0,1,2,3,4,5,6,7,8,9]),expectedOutput);
  })
  it("should return pattern with spaces when given array with empty arrays only",function(){
    let expectedOutput = ["_ _|_ _|_ _",
                          "_ _|_ _|_ _",
                          "   |   |   "]
    deepEqual(generateBoard([" "," "," "," "," "," "," "," "," ",]),expectedOutput);
  })
})

describe('placeMoves',function(){
  it('should return the board with values after concatinating array with given move',function(){
    let expectedOutput = ["_1_|_2_|_3_",
                          "_4_|_ _|_ _",
                          "   |   |   "]
    deepEqual(placeMoves([1,2,3," "," "," "," "," "," "],4),expectedOutput);
  })
})
