```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id": ObjectId("6520166c039158a0f94d5875")}, {"$inc": {"count": -1}});
```