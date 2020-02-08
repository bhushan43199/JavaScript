console.log('Welcome to tut 12.js')

let a = document;

a = document.all // give all nodes of your html file. work like array.forEach object..


//a = document.body; // give body tag of your html file

//a = document.forms[0]; // give forms of your html file

//Array.from(a).forEach(function (element) {
//   console.log(element);

//})

// array.from(a) created array of 'a' element..

a = document.links[0];
a = document.scripts[0];
a = document.images[0];


console.log(a);