const mongoose = require('mongoose');
const { Schema } = mongoose
const ObjectId = mongoose.Schema.Types.ObjectId;

/**
 subscribers: Array
    0: 20
    1: 11
 */
const BookSchema = new Schema({
    _id: {
        type: ObjectId, 
        required: false
    },
    name: {
        type: String,
        required: true
    },
    
    count: {
        type: Number,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    subscribers: {
        type: Array,
        required: false
    },
    pubDate: {
        type: String,
        required: false
    }
})

module.exports = BookSchema