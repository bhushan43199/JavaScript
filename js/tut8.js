console.log('This is tutorial 8');

const age = 23;
const vari = 34;
const doesDrive = true;
// if you convert age in string like '23' then you have to put if(age ===23)...

if (age == 23) {
    console.log('age is 23');
}
else {
    console.log('age is not 23');
}

if (typeof vari !== 'undefined') {
    console.log('vari is defined');

}
else {
    console.log('vari is not defined');
}

if (doesDrive && age > 18) {
    console.log('you can drive');
}
else {
    console.log('You cannot drive');
}

console.clear();
//Turnory opretor....
console.log(age == 45 ? 'Age is 45' : 'age is not 45');

// Switch-Case Statement


switch (age) {
    case 18:
        console.log("you are 18");

        break;
    case 28:
        console.log("you are 28");

        break;
    case 23:
        console.log("you are 23");

        break;

    default:
        console.log('we dont know your age');
        break;
}