let N = 5;


for(i=1;i<=N;i++){
  let bag =""
  for(j=1;j<=N;j++){
    if(i==1 || i==N || j==1){
      bag+="* "
    }
    // else{
    //   bag+="  "
    // }
  }
  console.log(bag)
}

// * * * * *
// *
// *
// *
// * * * * *