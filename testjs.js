// function createPhoneNumber(arr) {
//   let strnum = arr.toString()
//   return arr.join(
//     "(",
//     strnum[0],
//     strnum[1],
//     strnum[2],
//     ")",
//     " ",
//     strnum[3],
//     strnum[4],
//     strnum[5],
//     "-",
//     strnum[6],
//     strnum[7],
//     strnum[8],
//     strnum[9]
//   );
// }
//
// console.log(createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 8]));
//
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// function createPhoneNumber(numbers) {
//   let match1 = numbers.concat().slice(0, 3);
//   let match2 = numbers.concat().slice(3, 7);
//   let match3 = numbers.concat().slice(7, 11);
//
//   return console.log("(" + match1 + ")" + " " + match2 + "-" + match3);
// }
//
// createPhoneNumber(numbers);

function countPositivesSumNegatives(input) {
  let posSum = [];
  let negSum = [];
  input.forEach((n, i) => {
    if (n > 0) {
      posSum.push(n);
    } else {
      negSum.push(n);
    }
  });
  let finalPos = posSum.reduce((a, b) => a + b);
  let finalNeg = negSum.reduce((a, b) => a - b);
  let posNegSum = finalPos.concat(finalNeg);
  return posNegSum;
}

console.log(
  countPositivesSumNegatives([
    0,
    2,
    3,
    0,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14
  ])
);
