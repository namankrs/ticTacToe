const generateBoard = function(moves) { 
   return  ["_"+moves[0]+"_|"+"_"+moves[1]+"_|"+"_"+moves[2]+"_",
            "_"+moves[3]+"_|"+"_"+moves[4]+"_|"+"_"+moves[5]+"_",
            " "+moves[6]+" |"+" "+moves[7]+" |"+" "+moves[8]+" "];
}

module.exports = {
  generateBoard
}
