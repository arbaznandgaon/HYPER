

  let count=4;
function inc(){
  count++;
  return count;
}
function dec(){
  count--;
  
  return count;
}
arr=[inc(),dec()]


console.log(arr)
