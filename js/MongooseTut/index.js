// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/montukart', { useNewUrlParser: true });


// connection

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("We are connected brother")
});

// declaring schema
// schema is layer that control 
var kittySchema = new mongoose.Schema({
  name: String
});

// lock schema that covert in to model 
//var Kitten = mongoose.model('Kitten', kittySchema);
//// creating object
//var montuKitty = new Kitten({ name: 'montuKitty //name' });
//console.log(montuKitty.name); 

// storting that object(save in to database)
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}
// lock schema that covert in to model 
var Kitten = mongoose.model('montuKitty', kittySchema);
//// creating object
var montuKitty = new Kitten({name: 'MontuKitty'});
var montuKitty2 = new Kitten({name: 'MontuKitty2'});
//console.log(montuKitty.name);
//montuKitty.speak();


// save object....
montuKitty.save(function (err, montuKitty) {
  if (err) return console.error(err);
  montuKitty.speak();
});

montuKitty2.save(function (err, l) {
  if (err) return console.error(err);
 l.speak();
});

// do not use mongo powershell..
// find objects here

Kitten.find({name: "montuKitty"},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})