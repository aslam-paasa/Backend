const mongoose = require('mongoose');

/**
 * Connecting database:
*/
async function dbConnection() {
    try {
        await mongoose.connect("mongodb+srv://aslampaasa420:Sy********er@cluster0.goyedz2.mongodb.net/studentDB");
        console.log('Database connected');
    } catch(error) {
        console.log('Database Connection Failed');
    }
}

exports.dbConnection = dbConnection;