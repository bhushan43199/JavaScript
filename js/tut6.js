console.log("we are at tut6");


const name = 'Montu: ';
const greeting = 'Good Morning';
//console.log(name + greeting);

//string concatination

let html;

html = "<h1> This is Heading <h1>" +
        "<p> This is my Para</p>";
html = html.concat('this', ' str2');
//console.log(html);

// string length
//console.log(html.length);
//console.log(html.toLocaleLowerCase());
//console.log(html.toUpperCase());

//html indexing...

//console.log(html[5]);

//console.log(html.indexOf('This'));
//console.log(html.lastIndexOf('<'));
//console.log(html.charAt(3));
//console.log(html.endsWith('str2'));
//console.log(html.includes('is'));
//console.log(html.slice(0,4));
//console.log(html.split(' '));   // splits in to array after space

//console.log(html.replace('this', 'it'));


// template literals........

// use of ``.....

let fruits1 = 'Orenge\'';
let fruits2 = 'Apple';
let myHtml = `Hello ${name}
                <h1> This is heading </h1>
                <p> You like ${fruits1} and ${fruits2}

                `;
document.body.innerHTML = myHtml;




