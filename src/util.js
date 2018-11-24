const randomNumberGenerator = function(){
  return Math.ceil(Math.random()*9);
}

<<<<<<< HEAD
module.exports = { randomNumberGenerator }; 
=======
const deleteElement  = function(array,index) {
  array.splice(index,1);
  return array;
}


module.exports = { randomNumberGenerator,deleteElement }; 
>>>>>>> fb6692f6ff077cd6ed4843c43130e0a81872f500
