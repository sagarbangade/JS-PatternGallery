function wall(H, W) {
  for (i = 0; i < H; i++) {
    let bag = "";
    for (j = 0; j < W; j++) {
      if (i % 2 != 0) {
        bag += " []";
      } else {
        bag += "[] ";
      }
    }
    console.log(bag);
  }
}

console.log(wall(4, 5));


// [] [] [] [] [] 
//  [] [] [] [] []
// [] [] [] [] [] 
//  [] [] [] [] []