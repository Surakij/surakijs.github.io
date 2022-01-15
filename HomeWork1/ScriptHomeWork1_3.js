const getNumber = +prompt("PLease enter a number xxx :");
const arr = Array.from(String(getNumber), Number);
let sum = 0;
arr.forEach(function (el) {
  sum += el;
});
console.log(sum);
