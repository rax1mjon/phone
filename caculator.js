let button = document.querySelectorAll(".btn");
let display = document.querySelector(".display");

button.forEach((btn) => {
  btn.addEventListener("click", function () {
    calculator(display, this.id);
  });
});

function calculator(display, id) {
  let ArithmeticOperators = ["ac", "plus-minus", "percent", "divide"];

  if (!ArithmeticOperators.includes(id)) {
    console.log(id);
  } else {
    console.log("ArithmeticOperators:", id);
  }
}
