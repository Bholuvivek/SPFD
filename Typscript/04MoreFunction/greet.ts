function greeting(fn: (a: string) => void) {
  fn("Hello, Vivek");
}

function sayGreet(s: string) {
  console.log(s);
}

greeting(sayGreet);