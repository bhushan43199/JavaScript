console.log('this is tut 17');
// Events

document.getElementById('heading').addEventListener('click', function(e){
    console.log("you have clicked the heading ");
    // location.href = "www.facebook.com"
    variable = e.target;
    variable = e.target.classList;
    variable = e.target.dispatchEvent;
    
    console.log(variable);
});
