// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the size of the pyramid: ", function (size) {
//   size = parseInt(size);
size = 5;
for (let i = 1; i <= size; i++) {
  let bag = "";
  for (let j = 1; j <= size - i; j++) {
    bag += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    bag += "*";
  }
  console.log(bag);
}

//   rl.close();
// });

// pyramid pattern using asterisks (*) and spaces.

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
