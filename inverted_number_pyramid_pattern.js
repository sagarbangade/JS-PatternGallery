// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the size of the pyramid: ", function (size) {
//   size = parseInt(size);
size = 5
  for (let i = size ; i >= 1; i--) {
  let bag = "";
  for (let j = 1; j <= size - i; j++) {
    bag += " ";
  }
  for (let j = i; j >= 1 ; j--) {
      bag += j; 

  }
  console.log(bag);
}

//   rl.close();
// });


// inverted number pyramid pattern.
// 54321
//  4321
//   321
//    21
//     1



