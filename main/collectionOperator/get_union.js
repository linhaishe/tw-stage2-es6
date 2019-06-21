'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for (let item of collection_b) {
    if (collection_a.indexOf(item) === -1) {
      collection_a.push(item);
    }
  }
  console.log(collection_a);
  return collection_a;
}

module.exports = get_union;

