var login = prompt("Please enter login");
var password;

if (login == "admin") {
  password = prompt("please enter password");
  if (password == "passw0rd") {
    alert("Welome home, bro!");
  } else {
    alert("Wrong password");
  }
} else if (password == null) {
  alert("Canceled");
} else {
  alert("Access denied");
}
