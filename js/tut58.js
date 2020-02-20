console.log('This is tutorial 58');

//This is javascript from web development course

function greet(name, byeText) {
    console.log('good Morning ' + name + " " + byeText);

}
//greet('Harry');
timeOut = setTimeout(greet, 5000, "Montu", "Take Care"); // in syntex you cannot call function inside
console.log(timeOut);
clearTimeout(timeOut);

// Set interval

intervalId = setInterval(greet, 2000, "montu", "Good night");
clearInterval(intervalId);

// display time 

function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;

}

setInterval(displayTime, 1000)