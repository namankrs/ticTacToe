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

module.exports = { randomNumberGenerator,deleteElement,isWithin1to10,isValid }; 
