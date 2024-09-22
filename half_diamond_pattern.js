// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the size of the diamond: ", function (size) {
// size = parseInt(size);
size = 5;
for (let i = 1; i <= size; i++) {
  let bag = "";

  for (let j = 1; j <= i; j++) {
    bag += "*";
  }
  console.log(bag);
}

for (let i = size - 1; i >= 1; i--) {
  let bag = "";

  for (let j = 1; j <= i; j++) {
    bag += "*";
  }
  console.log(bag);
}

//   rl.close();
// });

// half diamond pattern using asterisks (*) and spaces.

// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *
