// Here I am going to create a function that will add two numbers

function Add(a, b) {
  console.log("Addition : ", a + b);
}

const sub = (a, b) => {
  console.log("Subtraction ", a - b);
};

function Multi(a, b) {
  console.log("Multiplication : ", a * b);
}

const Division = (a, b) => {
  console.log("Division", a / b);
};
// exporting the

module.exports = {
  Addition: Add,
  Subtration: sub,
  Multiplication: Multi,
  Division: Division,
};
