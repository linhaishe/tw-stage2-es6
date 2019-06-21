'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let result = [];
  result = collection.filter(function(x){
    return x % 2 === 0;
  });
  console.log(result);
  return result;
}

module.exports = collect_all_even;
