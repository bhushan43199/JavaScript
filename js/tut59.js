//Date object

console.log('This is Date and time');

let dt = new Date();
console.log(dt);


//let newDate = new Date(year, month, date,hours,minuts, seconds,milliseconds);


let newDate = new Date(3020, 4, 6, 2, 30, 34, 20);
console.log(newDate);

let yr = newDate.getFullYear();
console.log('The year is ' + yr);

let date = newDate.getDate();
console.log('The Date is ' + date);

let mn = newDate.getMonth();
console.log('The month is ' + mn);

let hr = newDate.getHours();
console.log('The hour is ' + hr);

newDate.setDate(7); // how to set date
newDate.setMinutes(29);
console.log(newDate);


//let dyte = Date.now();
//console.log(dyte);

setInterval(updateTime, 1000);

function updateTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;

}
setInterval(updateTime, 1000);