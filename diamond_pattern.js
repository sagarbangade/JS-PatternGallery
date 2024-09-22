const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the size of the diamond: ", function (size) {
  size = parseInt(size);
  let mid= Math.ceil(size/2)
for (let i = 1; i <= mid; i++) {
  let bag = "";
  for (let j = 1; j <= mid - i; j++) {
    bag += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    bag += "*";
  }
  console.log(bag);
}

for (let i = mid - 1; i >= 1; i--) {
  let bag = "";
  for (let j = 1; j <= mid - i; j++) {
    bag += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    bag += "*";
  }
  console.log(bag);
}

  rl.close();
});

// diamond pattern using asterisks (*) and spaces.


//   *
//  ***
// *****
//  ***
//   *

