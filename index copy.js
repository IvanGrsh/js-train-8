const obj = {
  0: "Hellow",
  1: "World",
  2: "!!!",
  length: 3,
  prefix: "():",
};

// console.log(
const arr = Array.from(
  obj,
  // {
  //   0: "Hellow",
  //   1: "World",
  //   2: "!!!",
  //   length: 3,
  // },
  function (elem, index) {
    //   console.log(this.length);

    //   console.log(elem, index);

    return `${this.prefix}${elem}`;
  },
  obj
);
// console.log(Array.isArray(arr));
// console.log(Array.of(1, 2, 3, 4, 5, 6));
// );

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [-4, 5, 4.6, 4.7, 5, 6];
// const arr3 = arr1;
// console.log(Array.of(...arr1, ...arr2));
// console.log([...arr1, ...arr2]);

// console.log(arr1.at(1));
// arr1 = [...arr1, 10];

// console.log(-(arr1.length - arr1.push(10, 20, 30, 40)));
// console.log(arr1);

// console.log(arr1.pop());

// console.log(arr1);

// console.log(arr1.shift());

// console.log(arr1);

// console.log(arr1.unshift(0, 1));

// console.log(arr1);

// console.log(arr2.includes(5));

// console.log(arr2.indexOf(5));

// console.log(arr2.lastIndexOf(5));

// const arr3 = arr1.concat(...arr2);
// console.log(arr3);

// console.log(arr1);

// arr1.copyWithin(2, 6, 9);
// console.log(arr1);

// arr1.fill(123, 6, 9);
// console.log(arr1);

// arr1.reverse();
// console.log(arr1);

// const filterFn = (value, index, array) => value % 2 === 0;
// const filteredArr = arr1.filter(filterFn);
// console.log(filteredArr);

// const sortFn = (elem1, elem2) => {
//   //   let result = elem1 - elem2;
//   //   if (elem1 % 2 === 0) {
//   //     result += 10;
//   //   }
//   //   if (elem1 % 2 === 0) {
//   //     return 1;
//   //   }
//   //   return elem1 < elem2 ? 1 : -1;
//   //   return result;
//   if (elem1 % 2 === elem2 % 2) {
//     return 0;
//   } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
//     return 1;
//   } else {
//     return -1;
//   }
// };

// const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].sort(
//   sortFn
// );
// console.log(sortedArr);

// console.log(["Arabic", "Info", "Zero", "City", "Aar"].sort());

console.log(arr2.some((elem, index, array) => elem >= 0));
