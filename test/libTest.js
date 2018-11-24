let {deepEqual,equal} = require("assert");
let {generateBoard} = require("../src/lib.js");

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
