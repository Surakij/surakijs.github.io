var input = prompt("enter text");
const regexpDate = /[0-9]{2}.[0-9]{2}.[0-9]{4}/g;
const regexpEmail = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

if (regexpDate.test(input)) {
  alert("this is Date");
} else if (regexpEmail.test(input)) {
  alert("This is email");
} else {
  alert("input invailid");
}
