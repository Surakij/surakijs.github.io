fun

const button = document.querySelector(".button");
button.hidden = true;

var text = getInputText();

const input = document.querySelector(".input_field");

input.addEventListener("click", showButton);

button.addEventListener("click", addElementToList(text));

function showButton() {
  const button = document.querySelector(".button");
  button.hidden = false;

  //button.addEventListener('click', removeButton);
}
function removeButton() {
  const button = document.querySelector(".button");
  button.hidden = true;
}

function getInputText() {
  var input = document.querySelector(".input_field");
  return input.value;
}
function addElementToList(text) {
  const listItem = document.createElement("p");

  const list = document.querySelector(".list");
  list.append(listItem);
  listItem.innerText = text;
}
