'use strict';
function map_to_even(collection){
  //return [2,4,6,8,10];
  return collection.map(function(collection_a){
    return collection_a * 3;
  });
}
module.exports = map_to_even;
