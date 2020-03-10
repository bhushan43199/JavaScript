// insert data in mongo db
use montukart
db.items.insertOne({name: "Iphone 11s", price: "100000", rating: 10, qty:500, sold:450})

db.items.insertMany([{name: "Iphone 11s", price: "1,00,000", rating: 7.6, qty:500, sold:450}, {name: "Iphone 11", price: "70,000", rating: 9, qty:500, sold:450}, {name: "Iphone XS", price: "70,000", rating: 9, qty:630, sold:450, isBig:true}])