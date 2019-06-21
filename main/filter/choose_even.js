'use strict';

function choose_even(collection) {
  //在这里写入代码
  let result = collection.filter(function(x){
    return x%2 === 0;
  })
  console.log(result);
  return result;
}

module.exports = choose_even;
