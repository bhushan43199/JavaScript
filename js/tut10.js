console.log("We are starting Functions")


// Functions .....

let name = 'Montu';
let name2 = 'Sucheta';
console.log(`Happy Birthday ${name} ... “Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!” `);

console.log(`Happy Birthday ${name2} ... “Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!” `);

// here we are doing duplication of code..

const mygreet = function (name, thank) {

    let msg = `Happy Birthday ${name} ... “Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!” ${thank} `;

    return msg;
}

//greet(name);
//greet(name2);
//let name3 = 'Patel';
//greet(name3, 'Thanks a lot');

console.clear();
// by returning msg using 'val' variable 
let val = mygreet('Jay', 'Thanks a lot');
document.write(val);


// in object you can also define function...

const myobj = {
    name: 'montu',
    game: function () {

        return 'GTA';

    }
}

console.log(myobj.game());
console.log(myobj.name);

arr = ['banana', 'mengo', 'apple'];

arr.forEach(function fruits(element, index, array) {

    console.log(element, index);
});

// javascript scope....... use 'let' 'var' 'const'

