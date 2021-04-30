// function name(array) {
// //   let result = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] > 0 && array[i] % 2 !== 0) {
// //       result += array[i];
// //     }
// //   }

// //   return result;

// }

// function name(array) {
//   return array.reduce((acamulete, elem) => {
//     if (elem > 0 && elem % 2 !== 0) {
//       acamulete += elem;
//     }
//     return acamulete;
//   }, 0);
// }

// function name(array) {
//   return array.reduce(
//     (acamulete, elem) =>
//       elem > 0 && elem % 2 !== 0 ? (acamulete += elem) : acamulete,
//     0
//   );
// }

// console.log(name([1, 2, 5, 7, 10, -10, -20, -20])); // 13

// let arr1 = [100, 500, 200];
// let arr2 = arr1;
// arr2 = [1000, 500, 200];
// console.log(arr1[0]);// 100

// function check(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(check([10, 15, 3, 7], 17)) // true
// console.log(check([10, 15, 3, 7], 20)) // false

// function name(number) {
//     // превращаем в строку
//   let str = number.toString();
//     //[...str] разбиваем строку по элементам, +elem - превращаем в число
//   let arr = [...str].reduce((acc, elem) => acc + +elem, 0);

//   return arr;
// }

// function name(number) {
//   let sum = 0;
//   while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
//   }
//   return sum;
// }

// console.log(name(123)); //6
// console.log(name(555)); // 15
// console.log(name(3332)); // 11
