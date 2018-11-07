"use strict"

var Joke = require('../models/Joke');

exports.createJoke = function (setup, punchline) {
    var joke = new Joke({
        setup: setup,
        punchline: punchline
    });
    return  joke.save();
}

exports.getJoke = function (jokeId) {
Joke.findOne({_id: jokeId}).exec();
}

exports.getJokes = function () {
   return Company.find().populate('jokes').exec();
}