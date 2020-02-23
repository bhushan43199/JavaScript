// NodeJs Modules (Built in Modules)
const fs = require("fs");

let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("node js", "NodeJs");

console.log("This is node js file: ");
console.log(text);

// creating a new file
console.log("Creating a new file.. ")

fs.writeFileSync("montu.txt", text);
fs.writeFileSync("demo.txt");


