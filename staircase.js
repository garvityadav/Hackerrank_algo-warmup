function staircase(n) {
  // Write your code here
  let number = 1;
for(let i=n ; i>0;i--){
  let s= "#";
  let blank = " ";
  if(number<=n){

    console.log(blank.repeat(i-1)+s.repeat(number));    
  }
  number++;
}
}
