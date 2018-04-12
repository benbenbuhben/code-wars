function insertDash(num) {

  var str = num.toString();
  var arr = str.split('');
  
  var indices = [];
  for(var i = 0; i < arr.length; i++){
    if((arr[i]%2===1) && (arr[i+1]%2===1)){
      indices.push(i);
    }
  }
  
  for(var i = 0; i < indices.length; i++){
    arr.splice(indices[i]+i+1, 0, '-');
  }
  
  return arr.join('')
  
}