let button = document.querySelectorAll(".btn");
let display = document.querySelector(".display");

button.forEach((btn) => {
  btn.addEventListener("click", function () {
    calculator(display, this.id);
  });
});

function calculator(display, id) {
  let ArithmeticOperators = ["/", "*", "-", "+"];
  let otherOperators = ["ac", "plus-minus", "percent"];
  let operator;
  let result = 0;

  if (id != "equal" && !otherOperators.includes(id)) {
    operator = id;
    if (ArithmeticOperators.includes(id)) {
      display.innerText += id;

      let first = display.innerText.split(operator)[0];
      let last = display.innerText.split(operator)[1];

      switch (operator) {
        case "+":
          result = +first + +last;
          break;
        case "-":
          result = +first - +last;
          break;
        case "*":
          result = +first * +last;
          break;
          78;
        case "/":
          result = +first / +last;
          break;
      }
    } else {
      display.innerText += id;
    }
  } else if (!otherOperators.includes(id)) {
    switch (id) {
      case "ac":
        result = "0";
        break;
      case "plus-minus":
        result = `-${display.innerText}`;
        break;
      case "*":
        result = +first * +last;
        break;
      case "/":
        result = +first / +last;
        break;
    }
  } else {
    display.innerText = result;
  }
}
