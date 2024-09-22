// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the size of the diamond: ", function (size) {
//   size = parseInt(size);
size = 5;
for (let i = 1; i <= size; i++) {
  let bag = "";
  for (let j = 1; j <= size - i; j++) {
    bag += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    bag += i;
  }
  console.log(bag);
}

//   rl.close();
// });

// mumber triangle pattern
//    1
//   222
//  33333
// 4444444
