// For, while, do while loop...
/*let a = 34;
a +=1;
a++;
console.log(a);
*/
// for loop...

for (let i = 0; i < 100; i++) {

    console.log(i);
}


// While loop...

let j = 0;
while (j < 10) {
    console.log(j);
    j += 1;

}

// do while loop
let k = 0;
do {
    console.log(k)
    if (k === 5) {
        //break;  // break and continue...
        k += 1;
        continue;

    }
    k++;

} while (k < 10);

console.log('done');

console.clear();

let arr = [2, 3, 4, 5, 6];
arr.forEach(function (element) {
    console.log(element);
});

let obj = {
    name: "Montu Patel",
    age: 23,
    type: 'Dangerous Programmer',
    os: "Ubantu"
}

for (let key in obj) {
    console.log(`The ${key} of programmer is ${obj[key]}`);
}