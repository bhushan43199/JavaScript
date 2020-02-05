console.log("Montu: Hello Sucheta!!! ")
let Name = "<h1>Montu: Hello Sucheta!!!</h1>";

document.body.innerHTML = Name;

console.log("We are discussing about arrays");

let marks = [20, 30, 40, 50, 60, 70];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');
//console.log(arr);
//console.log(mixed);
//console.log(fruits[1]);
//console.log(arr.length);

// Change in element of array
arr[0] = 'montu';

let arrelement = arr[0];
//console.log(arr);

// indexof Method.....

let value = marks.indexOf(40);
console.log(value);

//Adding and Modifying Array....
marks.push(100);
console.log(marks);
marks.unshift(99); // to add in start 
console.log("After adding in first " + marks);
console.log(marks.pop(100));
marks.splice(1, 2);
console.log(marks); // from 1st posision remove 2 elements
marks.reverse();
console.log(marks);

let marks2 = [1, 2, 3, 4, 5];
marks = marks.concat(marks2);
console.log(marks);

console.clear();

// Objects......

let myobj = {
    name: 'montu',
    channel: 'MontuPatel',
    isActive: true,
    marks: [1, 2, 3, 4, 5]

}

console.log(myobj);
console.log(myobj.name);




