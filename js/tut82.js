// searching for data in mongodb

use montuKart

// this query will return all the object with rating equal to 9

db.items.find({rating: 9})

db.items.find({rating: {$gte: 9}}) // greater then equal to 9 

// and operator 

db.items.find({rating: {$gte: 9}, price:{$gt:5000}})