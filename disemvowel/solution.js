function disemvowel(str) {

  let vowels=['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
  
  var arr=str.split('')
  
  for(var i = 0; i < arr.length; i++){
    let current = arr[i];
    for(var j = 0; j < vowels.length; j++){
      if(current===vowels[j]){
        arr.splice(i,1);
        i--;
      }
    }
  }
  
  let newstr = arr.join('');
  
  return newstr;
}