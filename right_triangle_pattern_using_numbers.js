// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the size of the triangle: ", function (size) {
//   size = parseInt(size);
size = 5;
for (i = 1; i <= size; i++) {
  let bag = "";
  for (j = 1; j <= i; j++) {
    bag += j;
  }
  console.log(bag);
}

//   rl.close();
// });

// right triangle pattern using numbers.

// 1
// 12
// 123
// 1234
