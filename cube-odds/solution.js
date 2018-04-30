function cubeOdd(arr) {
  console.log(arr);
  if(!(arr.every(x => typeof(x)==='number'))){
  return undefined;
  }
  
  return arr.filter(x => x%2).map(x => x*x*x).reduce((acc,curr) => acc + curr);
  }