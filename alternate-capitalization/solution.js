function capitalize(s){
  var arr1 = s.split('');
  var arr2 = s.split('');
  for (var i=0; i<arr1.length; i+=2){
    arr1.splice(i,1,arr1[i].toUpperCase());
  }
  for (i=1; i<arr1.length; i+=2){
    arr2.splice(i,1,arr2[i].toUpperCase());
  }
  return [arr1.join(''),arr2.join('')];
};