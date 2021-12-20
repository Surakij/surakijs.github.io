const button = document.querySelector(".button");
button.hidden = true;

const input = document.querySelector(".input_field");

input.addEventListener("click", showButton);

button.addEventListener("click", addElementToList);
//вызов кнопки и меняем значение спрятать на противоположное
function showButton() {
  const button = document.querySelector(".button");
  button.hidden = false;
}
//вызов кнопки и ее скрытие
function removeButton() {
  const button = document.querySelector(".button");
  button.hidden = true;
}

//обращение к полю ввода и возвращение его значения (введенный текст)
function getInputText() {
  var input = document.querySelector(".input_field");
  return input.value;
}
//по клику кнопки будет выполняться:

function addElementToList() {
  //забираем текст из поля ввода
  const text = getInputText();
  //создаем новый элемент и записываем в него значение из поля ввода
  const listItem = document.createElement("p");
  listItem.innerText = text;
  //обращаюсь в DIV по классу и добавляем в него новый элемент
  const list = document.querySelector(".list");
  list.append(listItem);
  //обращаемся к кнопке и скрываем кнопку
  const button = document.querySelector(".button");
  button.addEventListener("click", removeButton);
  // очистка поля ввода
  const input = document.querySelector(".input_field");
  input.value = "";
}
