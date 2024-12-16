var express = require("express");
var bodyparser = require("body-parser");
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017"; // Correct MongoDB Port
const dbName = "ESA";
let client;
let collection;

var app = express();
app.use(bodyparser.json());

// Connect to MongoDB
MongoClient.connect(url)
  .then((connection) => {
    client = connection;
    const db = client.db(dbName);
    collection = db.collection("2024");
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err.message);
  });

// Define the /flights route
app.get("/flights", async (req, res) => {
  try {
    const flights = await collection.find({},{projection:{_id:0,flnum:0}}).toArray();
    res.status(200).json(flights);
  } catch (err) {
    console.error("Some Error Occurred:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/flights/:from/:to', async (req,res)=>{
    const {from,to} = req.params;
    try{
        const flights = await collection.find({from,to}).toArray()
        if(flights){
            res.status(200).json(flights)
        }else{
            res.status(404).send("No Flights Found");
        }
    }catch(err){
        res.status(500).send("Internal Server Error")
    }
})

app.post('/flight', async(req,res) =>{
    try{
        const data = req.body;
        await collection.insertOne(data);
    }
})

// Start the server
app.listen(8080, () => {
  console.log("Server Running at: http://localhost:8080");
});
