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

<<<<<<< HEAD
module.exports = { randomNumberGenerator,deleteElement,isWithin1to9,isValid }; 
=======
module.exports = { randomNumberGenerator,deleteElement,isWithin1to10,isValid }; 
>>>>>>> 1efcfc74ddf4e38e7b8fb3cc4acb5baffad9389e
