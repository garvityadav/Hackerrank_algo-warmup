diagonalDifference(arr) {
  // Write your code here
  let sumLeftToRight = 0;
  let sumRightToLeft = 0; 
  for(let i =0;i<arr.length;i++){
      sumLeftToRight = sumLeftToRight +arr[i][i];
    
  }
  for(let i = arr.length-1;i>=0;i--){
    sumRightToLeft = sumRightToLeft+arr[i][(arr.length-1)-i];
  }
if(sumLeftToRight>sumRightToLeft){
  return sumLeftToRight-sumRightToLeft;
}
else{
  return sumRightToLeft-sumLeftToRight;
}
  }

