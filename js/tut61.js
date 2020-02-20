// Math function

console.log("Math function");
// Printing the Math objects

let m = Math;
console.log(m);

// Printing the constants from math object
console.log("The value of Math.E is ", Math.E);
console.log("The value of Math.PI is ", Math.PI);
console.log("The value of Math.LN2 is ", Math.LN2);
console.log("The value of Math.SQRTS1_2 is ", Math.SQRT1_2);
console.log("The value of Math.LOG2E is ", Math.LOG2E);

// Math Functions

let a = 34.64541;
let b = 89;

console.log("The value of a and b is ", a, b);


console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));

console.log("square root of 65", Math.sqrt(65))

console.log("14.68 rounded up to nearest integer ", Math.ceil(14.68));

console.log("14.68 rounded down to nearest integer ", Math.floor(14.68));

// absolute value
console.log("- 14.68 absolute value ", Math.abs(-14.68));

// trignomatric function

console.log("The value of sin(pi/2) ", Math.sin(Math.PI/2));

console.log("The value of tan(pi/2) ", Math.tan(Math.PI/2));


// min and max function

console.log("Minimum value of 7,5,9 is ", Math.min(7,5,9));
console.log("maxmum value of 7,5,9 is ", Math.max(7,5,9));

// generating rendom number
let r = Math.random();
// rendom number between e,d = e +(d-e)*Math.random()
let e = 1;
let d = 100;

let r1_100 = e +(d-e)*Math.random();
console.log("The rendom no. is ",r)
console.log("The rendom no. is ",r1_100)