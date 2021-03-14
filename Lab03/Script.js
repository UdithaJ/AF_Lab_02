use sliit

db.student.insertOne({
    "name":"John",
    "dateOfBirth": "1990-01-01T00:00:00z",
    "subjects":["Application frameworks","Computer architecture"]

})

db.student.find({"name":"John"})
db.student.find({"_id":ObjectId("6044c512ead58d7d8c2d09e5")})
db.student.update({"name":"John"},{$addToSet:{"subjects":["Distributed Computing"]}})

db.student.insertMany([{
    "name":"Smith",
    "dateOfBirth":"1990-01-1500:00:00z",
    "subjects":["Application frameworks","Computer architecture"],
    "isActive":true
},

{
   "name":"jane",
   "dateOfBirth":"1990-02-1500:00:00z",
   "subjects":["Application frameworks","Computer architecture"],
   "isActive":false
    
}])


db.student.findOneAndUpdate({$and:[{"name":"Smith"},{"isActive":true}]},{$addToSet:{"subjects":["Distributed Computing"]}},{ returnNewDocument: true })

db.student.findOneAndUpdate({"name":"John"},{$set:{"isActive":false}},{ returnNewDocument: true })
db.student.findOneAndDelete({"name":"John"},{ returnNewDocument: true })

