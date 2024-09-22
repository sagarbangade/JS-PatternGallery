let N = 3;

let count = 0;
for (i = 1; i <= N; i++) {
  let bag = "";
  for (j = 1; j <= N; j++) {
    count++;
    bag += count + " ";
  }
  console.log(bag);
}

// 1 2 3
// 4 5 6
// 7 8 9
