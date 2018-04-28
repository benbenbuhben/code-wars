function capitalize(s,arr){
  let stringArray = s.split('');
  for(let i=0; i< arr.length; i++){
    if(stringArray.length > arr[i]){
    stringArray.splice(arr[i], 1, stringArray[arr[i]].toUpperCase());
    }
  }
  return stringArray.join('');
};