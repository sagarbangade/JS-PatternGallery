let N =5

for(i=1;i<=N;i++){
  let bag =""
  for(j=1;j<=N;j++){
    if(j==1 || j==N || i==N ){
      bag+="* "
    }
    else{
      bag+="  "
    }
  }
  console.log(bag)
}

// *       *
// *       *
// *       *
// *       *
// * * * * *