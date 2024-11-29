// Import the MongoClient class from the mongodb package
const { MongoClient } = require('mongodb');

// Define the MongoDB connection URL
const url = "mongodb://127.0.0.1:27017";

// Define the client variable that will hold the MongoDB client instance
let client;

// Connect to MongoDB and run all operations inside the promise chain
MongoClient.connect(url)
    .then((connectionClient) => {
        client = connectionClient;  // Assign the connected client instance
        console.log();
        
        const db = client.db('Learning-Mongo');  // Select or create the database 'newDB'
        
        // 1. CREATE Collection - Creates a new collection named 'employee'
        return db.createCollection('employee');  
    })
    .then(() => {
        console.log("Collection 'employee' created successfully");

        // 2. INSERT Document - Insert a sample document into the 'employee' collection
        const data = { name: "Hamdan", age: 30, city: "New York", phone: "123-456-7890" };
        const collection = client.db('newDB').collection('employee');
        
        return collection.insertOne(data);  // Insert the document
    })
    .then((insertResult) => {
        console.log("Document inserted successfully:", insertResult.insertedId);

        // 3. RETRIEVE Documents - Fetch documents with specific fields (name and phone only)
        const collection = client.db('newDB').collection('employee');
        

        // Zero means false, so we need to explicitly specify the fields we want to retrieve
        // Here, we want to retrieve only the 'name' and 'phone' fields
        // The '_id' field is always retrieved unless explicitly excluded
        
        return collection.find({},{ projection: { _id: 0, name: 1, phone: 1 } }).toArray();
        // return collection.find({}).toArray(); // Retrieve everything from the collection
        })
    .then((documents) => {
        console.log("Documents fetched:", documents);

        // 4. UPDATE Document - Update the 'age' of the employee named "John"
        const collection = client.db('newDB').collection('employee');
        
        return collection.updateOne(
            { name: "John" },  // Filter: find the document with name "John"
            { $set: { age: 35 } }  // Update operation: set 'age' to 35
        );
    })
    // .then((updateResult) => {
    //     console.log("Document updated successfully:", updateResult.modifiedCount);

        //  // 5. DELETE Collection - Drop the 'employee' collection
    //     const db = client.db('newDB');
        
    //     return db.collection('employee').drop();  // Drop the collection
    // })
    // .then(() => {
    //     console.log("Collection 'employee' deleted successfully");
    // })
    .catch((err) => {
        console.error("An error occurred:", err);
    })
    .finally(() => {
        // Close the database connection in the end, regardless of success or failure
        if (client) {
            client.close();
        }
    });
