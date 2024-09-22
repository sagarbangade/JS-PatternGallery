const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the size of the diamond: ", function (size) {
  size = parseInt(size);
for (let i = 1; i <= size; i++) {
  let bag = "";

  for (let j = 1; j <= i ; j++) {
    if (j === 1 || j === i || i==size) {
      bag += "*"; 
    } else {
      bag += " "; 
    }
  }
  console.log(bag);
}



  rl.close();
});


// hollow right triangle pattern with asterisks (*) and spaces.

// *
// **
// * *
// *  *
// *****

