const  ObjectId  = require('bson').ObjectID
const MongoClient = require('mongodb').MongoClient;

// node mongo.js

DATABASE_URL = 'mongodb+srv://powe2009:myatlas@cluster0.jb7dw.mongodb.net/library?retryWrites=true&w=majority'

async function run() {
    const client = await MongoClient.connect(DATABASE_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // wait here
  
    const db = client.db('library');
    const coll = db.collection('books');

    try {

        const docs = [
            { name: "red"},
            { name: "blue"},
            { name: "yellow"},
         ];

         const inserted = await coll.insertMany(docs);
         // acknowledged: true,
         // insertedCount: 4,
         // insertedIds: {
         console.log(inserted)

    } catch (e) {
        console.log(e)
        if (client) client.close();
    }

    // End
    if (client) client.close();
}

run().catch(console.dir)

