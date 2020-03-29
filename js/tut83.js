// delete from mongodb
//
//show dbs:
//use montukart
//show collections
//
db.items.find({rating: 9})


// deleting items from the mongodb

db.items.deleteOne({rating: 9})

// deleteOne will delete the matching entry and if multiple entry then it will delete first one 

// to delete multiple 

db.items.deleteMany({rating: 9})