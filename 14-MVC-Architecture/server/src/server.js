/**
 * Software Architecture Patterns:
 * 1. Monolithic Architecture
 * => Monolithic Architecture Pattern m hm saara code ek single file
 *    m krte hai.
 * 
 * 2. Microservices Architecture
 * => Microservices Architecture Pattern is a way to design application
 *    as a collection of small services. Means apne kaam ko chote chote
 *    chunks m divide krna aur fir unme kaam krna.
 * => MVC is a microservices architecture that separates an application
 *    into three main components:
 *    a. Model     : Database Schema(Mongoose.model())
 *    b. View      : Frontend(HTML, CSS, JS, React, Next)
 *    c. Controller: Business Logic(Server-Side Logic),
 * => MVC Pattern making it easier to manage and maintain the codebase.
 * => It allows reusability of components and promotes a more modular
 *    approach to software development.
 * 
 * MVC Folder Structure:
 * 1. config
 * 2. controllers
 * 3. middlewares
 * 4. models
 * 5. validators
 * 6. Uploads
 * 7. Assets
 * */ 

const express = require('express');
const app = express();
const { userController } = require('./controllers/userController');
const { dbConnection } = require('./config/dbConnection');
const { check } = require('express-validator');

/**
 * Database Connection:
*/
dbConnection();

/**
 * Defining 
 * 1. Routes
 * 2. Middleware: Validation of Data
 *    For validation of data we require two things to immport from
 *    express-validator.
 *    a. check()
 *    b. validationResult()
*/
app.get('/', [
    check('name', "Error getting name").notEmpty(),
    check('surname', "Error getting surname").notEmpty()
], userController);


let port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})