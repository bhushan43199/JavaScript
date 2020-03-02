// this is tutorial of express
// what is express
// It is web application framework package 
// to know is use of express refer tut67 , in that we use if else, express automatically do everything for you
// how to set express routs 

const express = require("express")
const port = 80;
const path = require("path");


const app = express();
// for serving static files 
app.use('/static', express.static('static'))
// set the template engine (pug)
app.set('view engine', 'pug')
// after setting pug template engine create .pug file
// set a view directory 
app.set('views', path.join(__dirname, 'views'))
//our pug demo end point

app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hey Montu', message: 'Hello there! and thank you for using pug' })})






app.get("/", (req, res) => {
    res.send("This is home page my first express app")
})
app.get("/about", (req, res) => {
    res.status(200).send("This is about page my first express app")
})

app.get("/contact", (req, res) => {
    res.send("This is contact page my first express app")
})
app.post("/services", (req, res) => {
    res.send("This is services page my first express app")
})

app.get("/this", (req, res) => {
    res.status(404).send("This page is not found 404")
})
app.listen(port, () => {
    console.log(`The application started on port ${port}`)
})

