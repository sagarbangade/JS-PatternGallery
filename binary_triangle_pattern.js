let N=8
for(i=1;i<=N;i++){
  let bag =""
  for(j=1;j<=i;j++){
    if(j%2==0){
      bag+=0
    }
    else{
      bag+=1
    }

  }
  console.log(bag)
}

// binary triangle pattern:

// 1
// 10
// 101
// 1010
// 10101