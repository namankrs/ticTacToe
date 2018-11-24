const randomNumberGenerator = function(){
  return Math.ceil(Math.random()*9);
}

const deleteElement  = function(array,index) {
  array.splice(index,1);
  return array;
}


module.exports = { randomNumberGenerator,deleteElement }; 
