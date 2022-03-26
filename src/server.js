const {ApolloServer} = require('apollo-server');
require('dotenv').config();
require('./config/dbconnect')

const bookResolver = require('./resolvers/bookResolver')
const bookTypeDefs = require('./types/bookTypeDefs')

const resolvers = {
    ...bookResolver
}

const server = new ApolloServer({
    typeDefs: [bookTypeDefs],
    resolvers,
    // context: {models}
});

server.listen({port: process.env.PORT || 4000})
    .then( ({url}) => {
        console.log(`Server is ready at ${url}`);
    })
    

