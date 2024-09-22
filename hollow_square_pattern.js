// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the size of the square: ", function (size) {
//   size = parseInt(size);
size = 5;
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

//   rl.close();
// });

// hollow square pattern using asterisks (*) and spaces.

// *****
// *   *
// *   *
// *   *
// *****
