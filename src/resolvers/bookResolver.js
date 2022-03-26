const mongoose = require('mongoose')
const BookSchema = require('../models/BookSchema')

//  any name                  collection name
const books = mongoose.model('books', BookSchema)

const bookResolver = {
    Query: {
        books (parent, args, context, info) {
            
            return books.find()
                .then (books => {
                    return books            // array of Book objects
                })
                .catch (err => {
                    console.error(err)
                })
            },

        bookByName: ( parent, {name}, context, info ) => {
            return books.find( { name: name } )
                .then(book => {
                    console.log('book', book)
                    return  book
                })
                .catch( err => {
                    console.error(err)
                })
            },

        bookByCount: ( parent, { count }, context, info ) => {
            return books.find( {  count: { $gt: count }  } )
                .then(book => {
                    console.log('book', book)
                    return  book
                })
                .catch( err => {
                    console.error(err)
                })
            },

        bookByPrice: ( parent, { price }, context, info ) => {
            return books.find( { price: { $lte: price }  } )
                .then(book => {
                    console.log('book by price', book)
                    return  book
                })
                .catch( err => {
                    console.error(err)
                })
            },

        bookByNameCount: ( parent, {name, count}, context, info ) => {
            return books.find( { name: name, count: count} )
                .then(book => {
                    console.log('book', book)
                    return  book
                })
                .catch( err => {
                    console.error(err)
                })
            },
       
    },

}

module.exports = bookResolver


