const {MongoClient} = require("mongodb")

const url = "mongodb://127.0.0.1:27017"

let client

MongoClient.connect(url)
    .then((connectionClient)=>{
        client = connectionClient
        const db = client.db("15DEC");
        return db.createCollection("todo")
    })
    .then((collection) =>{
        console.log("New Collection Created Broski!!");
        const data = {name:"Mohammed Musharraf",srn:"PES2UG23CS915"}
        return collection.insertOne(data)
        
    })
    .then(()=>{
        const db = client.db("15DEC")
        const collection = db.collection("todo")
        return collection.find({},{projection:{_id:0,name:1,srn:1}}).toArray();
     
    })
    .then((data)=>{
        console.log("The Data in the DB is: ", data);
        return;
        
    })
    .then(()=>{
        const collection = client.db("15DEC").collection("todo")
        const data = [{
            name: "John Doe",
            srn: "PES2UG23CS001"
        },
        {
            name: "Abduallah",
            srn: "PES2UG23CS100"
        }
    ]
            return collection.insertMany(data);
    })

    .then(()=>{
        const db = client.db("15DEC")
        const collection = db.collection("todo")
        return collection.find({},{projection:{_id:0,name:1,srn:1}}).toArray();
    })
    .then((data)=>{
        console.log("The Data in the DB is: ", data);
        return;
        
    })
    // To Update:
    .then(()=>{
        const collection = client.db("15DEC").collection("todo")
        return collection.updateOne({name:"John Doe"},{$set:{name:"Mohammed Shazi"}})
        
    })
    .then(()=>{
        return console.log("This was for just time pass");
        
    })
    .then(()=>{
        if(client){
        client.close()
        }
    })