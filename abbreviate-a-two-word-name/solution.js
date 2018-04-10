function abbrevName(name){

  var firstLetter = name.charAt(0).toUpperCase();
  var secondLetter = name.substr(name.indexOf(' ')+1).charAt(0).toUpperCase();
  return `${firstLetter}.${secondLetter}`; 

}