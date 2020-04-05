// this is tutorial of express
// what is express
// It is web application framework package 
// to know is use of express refer tut67 , in that we use if else, express automatically do everything for you
// how to set express routs 

const express = require("express")
const port = 80;
var mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const path = require("path");
const app = express();

// define mongoose schema

var contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    address: String,
    more: String,
    
  });


  var Contact = mongoose.model('Contact', contactSchema);
// EXPRESS SPECIFIC STUFF-------------------------------

app.use('/static', express.static('static')) // for serving static files 
//app.use(express.urlencoded)// middleware for getting data from form

// PUG SPECIFIC STUFF----------------------------------
app.set('view engine', 'pug')// set the template engine (pug)
app.set('views', path.join(__dirname, 'views'))// set a view directory// after setting pug template engine create .pug file
 
//our pug demo end point
// app.get("/demo", (req, res) => {
//     res.status(200).render('demo', { title: 'Hey Montu', message: 'Hello there! and thank you for using pug' })})






// app.get("/", (req, res) => {
//     res.send("This is home page my first express app")
// })
// app.get("/about", (req, res) => {
//     res.status(200).send("This is about page my first express app")
// })

// app.get("/contact", (req, res) => {
//     res.send("This is contact page my first express app")
// })
// app.post("/services", (req, res) => {
//     res.send("This is services page my first express app")
// })

// app.get("/this", (req, res) => {
//     res.status(404).send("This page is not found 404")
// })


// ENDPOINTS------------------------------------

app.get('/', (req,res)=>{
    res.status(200).render('index.pug')  // vew use render here because we are using templates 
})

app.post('/', (req,res)=>{
    var myData = new Contact(req.body)
    myData.save().then(()=>{
        res.send("This item has been saved to the Database")
    }).catch(()=>{
        res.status(400).send("Item was not send to Database")
    });
    //res.status(200).render('index.pug')  // vew use render here because we are using templates 
})


//app.post('/',(req,res)=>{
//    //console.log(req.body)
//    //name = req.body.name;
//    res.status(200).render('index.pug');
//    //const params = {'message': "Your form has been submitted"}
//})

//START THE SERVER------------------------------
app.listen(port, () => {
    console.log(`The application started on port ${port}`)
})

