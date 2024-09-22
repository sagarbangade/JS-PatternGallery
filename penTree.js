function penTree(N) {
  for (i = 1; i <= N; i++) {
    let bag = "";
    for (j = N; j > i; j--) {
      bag += " ";
    }
    for (j = 1; j < i * 2; j++) {
      if (i != N) {
        bag += "*";
      } else if (i == N && j == (i * 2) / 2) {
        bag += "|";
      } else {
        bag += " ";
      }
    }

    console.log(bag);
  }
}

console.log(penTree(5));


//    *
//   ***
//  *****
// *******
//    |  