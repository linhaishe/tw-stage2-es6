'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(v => !collection_b.includes(v));
}

module.exports = choose_no_common_elements;
