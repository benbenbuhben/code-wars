function high(x){

  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var alphArray = alphabet.split('');
  var arrayOfWords = x.split(' ');
  
  var arrayOfTotals = []
  for(var i = 0; i < arrayOfWords.length; i++){
    var runningSum = 0;
    for(var j = 0; j < arrayOfWords[i].length; j++){
      runningSum = runningSum + alphArray.indexOf(arrayOfWords[i][j]) + 1;
    }
    arrayOfTotals.push(runningSum);
  }
  
  var indexOfMax = arrayOfTotals.indexOf(Math.max(...arrayOfTotals));
  return arrayOfWords[indexOfMax];
  
  }