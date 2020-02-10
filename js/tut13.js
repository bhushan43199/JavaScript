console.log('this is tut13');
let a = document;

a = document.all;

a = document.links[0];

var str = document.links;
console.log(str);
var n = 'facebook';

for (let i = 0; i < str.length; i++) {
    if (str[i].href.includes(n)) {
        console.log(str[i].href);

    }

}



console.log(a);
