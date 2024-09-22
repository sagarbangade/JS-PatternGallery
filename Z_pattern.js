let N=5

let count =N
     for(i=1;i<=N;i++){
      let bag =""
      for(j=1;j<=N;j++){
        if(i==1 || i==N | j==count){
          bag+="*"
        }
        else{
          bag+=" "
        }
        
      }
      count--
      console.log(bag)
    }

// letter 'Z' pattern

// *****
//    *
//   *
//  *
// *****