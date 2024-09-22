// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the size of the diamond: ", function (size) {
  // size = parseInt(size);
  size =5
for (let i = 1; i <= size; i++) {
  let bag = "";
  for (let j = 1; j <= size - i; j++) {
    bag += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      bag += "*"; 
    } else {
      bag += " "; 
    }
  }
  console.log(bag);
}

for (let i = size - 1; i >= 1; i--) {
  let bag = "";
  for (let j = 1; j <= size - i; j++) {
    bag += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      bag += "*"; 
    } else {
      bag += " "; 
    }
  }
  console.log(bag);
}

//   rl.close();
// });

// hollow diamond pattern using asterisks (*) and spaces.

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

