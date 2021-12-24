const input = prompt("Enter date as DD.MM.YYYY :");
const [day, month, year] = input.split('.');
const inputDate = new Date(`${year}-${month}-${day}`);
let dayOfWeek = inputDate.getDay();

console.log(dayOfWeek);  
