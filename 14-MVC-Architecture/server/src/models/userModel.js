const mongoose = require('mongoose');

/**
 * Database Modelling(Blueprint):
*/
const Schema = { name: String, surname: String };
const Students = mongoose.model('Students', Schema);

exports.Students = Students;