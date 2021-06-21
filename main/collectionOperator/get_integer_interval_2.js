"use strict";

let get_integer_interval_2 = (number_a, number_b) =>
  getEvenArr(get_integer_interval_arr(number_a, number_b));
//获得给定数值的区间
let get_integer_interval_arr = (num1, num2) => {
  let integerArr = [];
  if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      integerArr.push(i);
    }
  } else {
    //num2<num1,num1>num2
    for (let i = num1; i >= num2; i--) {
      integerArr.push(i);
    }
  }
  return integerArr;
};

//获取偶数

let getEvenArr = (collection) => collection.filter((item) => item % 2 === 0);

module.exports = get_integer_interval_2;
