// JavaScript source code

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect('', { useUnifiedTopology: true, useNewUrlParser: true } );

mongoose.connection.once('open',()=> {
    console.log('connected to database');
});
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Now listening for request on port 3000');
});
