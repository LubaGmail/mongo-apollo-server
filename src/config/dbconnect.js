const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect( process.env.DATABASE_URL, 
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true}, 
        err => {
            err ?  console.error('Connection to DB failed') : console.log('Connection to DB was successful')
        }
    )

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {   
    console.log("Database name: ", db.name);
});