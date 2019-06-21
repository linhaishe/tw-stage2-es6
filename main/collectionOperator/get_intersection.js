'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  for (let j = 0; j < collection_b.length; j++) {
    for (let i = 0; i < collection_a.length; i++) {
      if (collection_a[i] === collection_b[j]) {
        result.push(collection_b[j]);
      }
    }
  }
  console.log(result);
  return result;
}

module.exports = get_intersection;
