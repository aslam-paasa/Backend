/**
 * 2. Update the previously made Car Model to include a reference
 *    to the Maker Model:
*/

/**
* Importing mongoose:
*/
const mongoose = require('mongoose');
const Maker = require('./maker');

/**
 * Creating Schema for our Car Model:
*/
const carSchema = new mongoose.Schema({
    model: String,
    year: Number,
    maker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Maker',
    },
})



/**
 * When we define this, it gives us an object on which save() is a
 * defined function:
*/
const Car = mongoose.model('Car', carSchema)

module.exports = Maker;