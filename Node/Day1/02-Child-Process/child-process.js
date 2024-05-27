const childprocess = require("child_process");

// childprocess.execSync("calc");

console.log("output  " + childprocess.execSync("node demo.js"));
