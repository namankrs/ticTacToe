const randomNumberGenerator = function(){
  return Math.ceil(Math.random()*9);
}

const deleteElement  = function(array,index) {
  array.splice(index,1);
  return array;
}

const isWithin1to9 = function(numberToCheck){
  return numberToCheck >= 1 && numberToCheck < 10;
}

const isValid = function(moves,moveToCheck){
  return isWithin1to9(moveToCheck) && moves.includes(moveToCheck)
}

const symbol = function() {
  let toggle = 0;
  return function() {
    toggle = !toggle;
    if(toggle) {
      return "O";
    }
    return "X";
  }
};

const isSubset = function(superset,subset){
  let result = false;

  for(moveSet of subset){
    if(superset.every(superset.includes,moveSet))
      result = true;
  }
  return result;
}

module.exports = { randomNumberGenerator,deleteElement,isWithin1to9,isValid,symbol,isSubset}; 
