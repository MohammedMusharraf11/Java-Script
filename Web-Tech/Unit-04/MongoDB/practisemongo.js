const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1:27017"
let client

MongoClient.connect(url)
    .then((connectedClient) => {
        client = connectedClient;
        console.log("Mongo Connected!!");
        const db = client.db("practise");

        const collection = db.createCollection("Collection-1");
        return collection;

    })
    .then((res)=>{
        console.log("Collection Created Successfully!!");

        const data = {name:"Mohammed Musharraf", SRN:"PES2UG23CS915", Age:"18"}
        const collection = client.db("practise").collection("Collection-1");

        return collection.insertOne(data);
        
    })
    .then(()=>{
        console.log("Entry added successfully!!");
        const collection = client.db("practise").collection("Collection-1");
        collection.deleteMany({name:"Mohammed Musharraf"})
        return collection.find({},{projection:{_id:0 , name:1}}).toArray();
        
    })
    .then((res) =>{
        console.log("Documents Fetched: ", res);
        client.close()
    })



    const {MongoClient} = require("mongodb")
    const url = "mongodb://127.0.0.1:27017"

    let client

    MongoClient.connect(url)
        .then((connectedClient)=>{
            client = connectedClient
            const db = client.db("New")
            const collection = db.collection("NEWNWN")
        })