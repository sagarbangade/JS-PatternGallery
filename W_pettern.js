let N=5

for(i=1;i<=N;i++){
  let bag_1 =""
  for(j=1;j<=N*2;j++){
    if(j==i){
      bag_1+="\\"
    }
    else if(j==((N*2)-i)+1){
      bag_1+="/"
    }
    else{
      bag_1+=" "
    }
    
  }
  
  let bag_2 =""
  for(j=1;j<=N*2;j++){
    if(j==i){
      bag_2+="\\"
    }
    else if(j==((N*2)-i)+1){
      bag_2+="/"
    }
    else if(j<((N*2)-i)+1){
      bag_2+=" "
    }
    
  }

  console.log(bag_1+bag_2)
  
}
// w pattern
// \      /\      /
//  \    /  \    /
//   \  /    \  /       
//    \/      \/