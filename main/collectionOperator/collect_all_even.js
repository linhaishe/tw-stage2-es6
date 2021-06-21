"use strict";

// function collect_all_even(collection) {
//   //在这里写入代码
//   let result = collection.filter((x) => x % 2 === 0);
//   // console.log(result);
//   return result;
// }

let collect_all_even = (collection) =>
  collection.filter((element) => element % 2 === 0);

module.exports = collect_all_even;
