/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var joke = new Schema({
    setup: setup,
    punchline: punchline
});

// noinspection JSAnnotator
joke.methods.toString() = function () {
    return ", setup: " + this.setup + ", punchline: " + this.punchline
};

module.exports = mongoose.model('Joke', joke);

*/

const mongoose = require('mongoose')

module.exports = mongoose.model('Joke', new mongoose.Schema({
    setup: { type: String, required: true },
    punchline: { type: String, required: true }
}))
