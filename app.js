"use strict"

const express = require('express');
const morgan = require('morgan');
const config = requrie('./config');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('tiny'));

//Mongodb & mongoose setup
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(config.localMongoDB + '/jokeDB', {useNewUrlParser : true});

// Routes for the app
const jokeRouter = require('./routes');

//Start the server
const port = process.env.PORT || config.localPort;
app.listen(port);
console.log('Listening on port' + port + '...');

module.exports = app;