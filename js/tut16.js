let element = document.createElement('li');
let text = document.createTextNode(' second method : I am a text node')
element.appendChild(text);

// add a class name to the li element

element.className = 'childul';
element.id = 'createdli'; // gives id to class

element.setAttribute('Title', 'mytitle'); // gives atributes to that element
element.innerText = 'Hello This is created by montu...'
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul); // this is first method which follows 1,2,11,12,13,14
element.appendChild(text); // This is second method which follow code line 1,2,3,15
console.log(element);

// replace element

let elem2 = document.createElement('h3');

elem2.id = 'elem2';
elem2.className ='elem2';
let tnode = document.createTextNode('this is a created node for second child');
elem2.appendChild(tnode);

// replace

element.replaceWith(elem2); // element replace by elem2
console.log(elem2);

// remove child

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui')); // replace child

myul.removeChild(document.getElementById('lui'));
 
let pr = elem2.hasAttribute('id')
console.log(elem2,pr)
