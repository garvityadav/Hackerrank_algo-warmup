function plusMinus(arr) {
  // Write your code here
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  arr.map(user=>{
    if(user>0){
      return positiveCount= positiveCount+1;
    }
    else if(user<0){
      negativeCount = negativeCount+1
    }
    else if(user==0){
      zeroCount = zeroCount+1;
    }
    else{return undefined};
  })
  let positiveFraction = positiveCount/arr.length;
  let negativeFraction  = negativeCount/arr.length;
  let zeroFraction = zeroCount/arr.length;
   console.log(positiveFraction);
   console.log(negativeFraction);
   console.log(zeroFraction);

}
