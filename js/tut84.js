// updating data from mongodb

show dbs:
use montukart
show collections

// how to update db

db.item.updateOne({name "Iphone 11s"}, {$set: {price: 2}})
db.items.find();

db.items.updateMany({name: "Iphone 11s"}, {$set: {price: 2, rating: 2}})