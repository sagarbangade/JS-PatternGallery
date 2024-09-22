let N =5

for(i=N;i>0;i--){
  let bag =""
  for(j=1;j<=N;j++){
    if(i==N && j==N ){
      bag+="*"
    }
    if(j==N && i!=N){
      bag+=" "
    }
    
    if(j<=i && j!=N){
      bag+="* "
    }
    
    else if(j>=i && j!=N){
      bag+="  "
    }
  }
  console.log(bag)
}

// * * * * *
// * * * *  
// * * *    
// * *      
// *  