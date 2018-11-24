const randomNumberGenerator = function(){
  return Math.ceil(Math.random()*9);
}

const deleteElement  = function(array,index) {
  return array.splice(index,0);
}

module.exports = { randomNumberGenerator,deleteElement }; 
