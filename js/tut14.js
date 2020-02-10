console.log("welcome to tut 14");

// Element selector from DOM..

// two types of element selector
//single and multielement selector

let element = document.getElementById('first');

//element = document.childNodes;
//element = document.parentNode;

element.style.color = 'red';
element.style.background = "blue";
element.innerText = "Montu is gentlemen";



console.log(element);


let sel = document.querySelector('#first');  // Query element selctor by id and class and by div
sel = document.querySelector('div');
sel = document.querySelector('.container');
console.log(sel);

// 2.0  multi element selector....

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container')
console.log(elems[0].getElementsByClassName('child'));
elems = document.getElementsByTagName('div')
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
    
});

