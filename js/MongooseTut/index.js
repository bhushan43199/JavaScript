// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/montuKart', {useNewUrlParser: true});


// connection

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected brother")
});