let N = 5;
let M = 5;

//write your code here
for (i = 1; i <= N * 2; i++) {
  let bag = "";
  for (j = 1; j <= M; j++) {
    if (i % 2 == 0) {
      bag += "\\/";
    } else if (i % 2 != 0) {
      bag += "/\\";
    }
  }
  console.log("+" + bag + "+");
}
// +/\/\/\/\/\+
// +\/\/\/\/\/+
// +/\/\/\/\/\+
// +\/\/\/\/\/+
// +/\/\/\/\/\+
// +\/\/\/\/\/+
// +/\/\/\/\/\+
// +\/\/\/\/\/+
// +/\/\/\/\/\+
// +\/\/\/\/\/+
