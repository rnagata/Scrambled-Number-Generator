'use strict';

module.exports = function(n) {
  // do work here
  let uniqueNumbers = []
  let randomArray = [];

  for (let i = 0; i < n; i++){
    uniqueNumbers.push(i);
  }

  while (uniqueNumbers.length > 0){
    let index = Math.floor(Math.random() * uniqueNumbers.length);
    let removed = uniqueNumbers.splice(index, 1);
    randomArray.push(removed);
  }
  
  return randomArray;
};
