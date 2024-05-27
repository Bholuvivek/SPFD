const filesystem = require("fs");

const readfile = filesystem.readFileSync("./test.txt");

//read the file
console.log("file data is :" + readfile);

//Writing the file

filesystem.writeFileSync(
  "./test.txt",
  "This is the new file Here I am writting this content using the writeFileSync method",
);

console.log("file data is Updated");

const readfilenew = filesystem.readFileSync("./test.txt");

console.log("file data is :" + readfilenew);
