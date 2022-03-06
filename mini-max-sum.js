function miniMaxSum(arr) {
  // Write your code here
    arr = arr.sort((a,b)=>{return a-b});
  let min = 0;
  let max = 0;
  for(let i =0;i<arr.length-1;i++){
    min = arr[i]+min;
  }

for(let i =1;i<arr.length;i++){
  max = arr[i]+max;
}
console.log(`${min} ${max}`)
}
