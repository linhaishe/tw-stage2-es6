"use strict";

// function get_integer_interval(number_a, number_b) {
//   //在这里写入代码
//   let n = [];
//   if (number_a < number_b) {
//     for (let i = number_a; i <= number_b; i++) {
//       n.push(i);
//     }
//   } else if (number_a > number_b) {
//     for (let i = number_a; i >= number_b; i--) {
//       n.push(i);
//     }
//   } else if ((number_a = number_b)) {
//     n.push(number_a);
//   }
//   return n;
// }

let get_integer_interval = (num1, num2) => get_integer_interval_arr(num1, num2);

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

module.exports = get_integer_interval;
