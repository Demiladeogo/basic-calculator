var num1 = window.prompt("enter a number");
var num2 = window.prompt("enter another number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const operator = prompt("enter operator(+,-,/,*)");
let answer = 0;
if (isNaN(num1) || isNaN(num2)) {
  window.alert("incorrect input. Refresh the page");
} else {
  if (operator == "+") {
     window.alert(num1 + num2);
  } else if (operator == "-") {
     window.alert(num1 - num2);
  } else if (operator == "*") {
    window.alert(num1 * num2);
  } else if (operator == "/") {
    window.alert(num1 / num2);
  }
}
