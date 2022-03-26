const  ObjectId  = require('bson').ObjectID
const MongoClient = require('mongodb').MongoClient;

// node update.js

DATABASE_URL='mongodb+srv://powe2009:sherpa@cluster0.jb7dw.mongodb.net/library?retryWrites=true&w=majority'

async function run() {
    const client = await MongoClient.connect(DATABASE_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // wait here
  
    const db = client.db('library');
    const coll = db.collection('books');
   
    try {
        // const updated = await coll.updateMany(
        //     { name: 'blue' },
        //     { $set: {count: 111} },
        //     { upsert: true }
        // )
        // const updated = await coll.updateMany(
        //     { name: 'red' },
        //     { $set: {subscribers: [20, 11]} },
        //     { upsert: true }
        // )
        const updated = await coll.updateMany(
            { name: 'red' },
            { $set: {pubDate: new Date()} },
            { upsert: true }
        )
        console.log(updated)

    } catch (e) {
        console.log(e)
        if (client) client.close();
    }

    // End
    if (client) client.close();
}

run().catch(console.dir)

