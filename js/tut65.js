// Synchronous or blocking
// use line by line execution
// asynchoronous or non blocking
// line by line not guranteed and callbacks will fire


const fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8", (err,data)=>{
    console.log(err,data);
});
console.log("This is a message ");

//async needs function in syntex or call back
/*
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/
