console.log('this is tut 17');
// Events

document.getElementById('heading').addEventListener('click', function(e){
    console.log("you have clicked the heading ");
    // location.href = "www.facebook.com"
    variable = e.target;
    variable = e.target.classList;
    variable = e.target.dispatchEvent;
    variable = e.clientX;
    variable = e.clientY;
    variable = e.offsetX;
    
    
    console.log(variable);
});
