'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let v = [];
  v = [].concat.apply([], collection);
  return v;
}

module.exports = double_to_one;
