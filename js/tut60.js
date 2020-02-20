// arrow function

// this is also ES6 function

console.log('This is arrow function')

let = greet = () => {
    console.log("Hello world")
}

greet();

setTimeout(() => {
    console.log("We are inside set time out")
}, 2000);

let sum = (a, b) => {
    return a + b;

}
console.log(sum(34, 50));

// you can also write like ...

let sum2 = (c, d) => c + d;
console.log(sum2(50, 40));

// if you have only one argument
let half = a=> a/2;
console.log(half(45));

let obj1 = {
    names:["Montu", "Sucheta", "Pratik", "Chhayu"],
    speak(){
          this.names.forEach((student)=>{
              console.log("Cookede cook " + student);
          })  
    }
}

obj1.speak();


