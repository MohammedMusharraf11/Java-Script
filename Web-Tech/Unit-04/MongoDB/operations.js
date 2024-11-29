const { MongoClient } = require('mongodb');

// MongoDB connection URL and database name
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'webtech';
// Function to connect to MongoDB
await client.connect();

// Function to insert a student
function insertStudent(student, callback) {
    mongoConnect((db, client) => {
        const collection = db.collection(collectionName);
        collection.insertOne(student, function(err, result) {
            if (err) {
                console.error('Insert failed:', err);
                return;
            }
            console.log('Student inserted successfully:', result.ops);
            callback(result);
            client.close();
        });
    });
}

// Test data for inserting a student
const newStudent = {
    name: "John ",
    age: 20,
    major: "Computer Science Engineering",
    specialization: "Artificial Intelligence",
    graduationYear: 2024,
    email: "john.doe@example.com"
};

// Insert a student
insertStudent(newStudent, (result) => {
    console.log('Insert result:', result);
});
