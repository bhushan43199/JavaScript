console.log('this is tut 15');

let cont = document.querySelector('.no')
 cont = document.querySelector('.container');

console.log(cont.childNodes); // allow select all nodes
console.log(cont.children);  // allow select only elements
let nodeName = cont.childNodes[1].nodeName; // name of node
let nodeType = cont.childNodes[1].nodeType; // give node type
console.log(nodeType);
console.log(nodeName);

console.log(cont.children[0].children)


// node types
/* 
1. elements
2. attributes
3. text node
8. comments
9. documents
10. doctypes
 */

let container = document.querySelector('div.container');

console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.childElementCount); //count of child element

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);





