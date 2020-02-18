console.log('This is tut 18');
let btn = document.getElementById('btn');

btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
function func1(e) {
    console.log('thanks', e);
    e.preventDefault();
}

function func2(e) {
    console.log('Thanks its double click', e);
    e.preventDefault();
}

// mouse down

btn.addEventListener('mousedown', func3);
function func3(e) {
    console.log('Thanks its mouse down', e)
    e.preventDefault();

}
// mouse enter event
document.querySelector('div.no').addEventListener('mouseenter', function () {
    console.log('You entered no');
}
)

// mouse leave event

document.querySelector('div.no').addEventListener('mouseleave', function () {
    console.log('You leave no');
}
)
// mouse move event
document.querySelector('div.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY} , ${e.offsetY+e.offsetX})`;
    console.log('You move mouse');
}
)