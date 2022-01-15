function isPalindrom(str) {
  let strRevert = "";
  for (var i = str.length -1; i >= 0; i--) {

    strRevert += str[i];
    console.log(strRevert);
  }
  
  return str === strRevert;
}

console.log(isPalindrom("aaaba"));
