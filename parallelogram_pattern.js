let N=5
let count = N
     for(i=1;i<=N;i++){
      let bag =""
      for(j=1;j<=N+count;j++){
        if(j<count){
          bag+=" "
        }
        
        else if(j>count){
          bag+="*"
        }
        
      }
      count--
      console.log(bag)
    }

//     parallelogram pattern
//     *****
//    *****
//   *****
//  *****
// *****