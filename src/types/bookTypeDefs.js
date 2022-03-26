const { gql } = require('apollo-server')

const bookTypeDefs = gql`
    type Query {
        books: [Book]!
        bookByName(name: String!): [Book]
        bookByCount(count: Int!): [Book]
        bookByPrice(price: Float!): [Book]
        bookByNameCount(name: String!, count: Int!): [Book]
    }

    type Book {
        _id: ID
        name: String,
        count: Int,
        price: Float,
        "subscribers: { type: Array.."
        subscribers: [String],
        pubDate: String
    }
`
    
module.exports = bookTypeDefs