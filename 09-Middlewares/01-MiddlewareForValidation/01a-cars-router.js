/**
 * Router Level Middleware:
*/

const express = require('express');
const carRouter = express.Router();

const cars = require('../01c-data');

carRouter.get('/', (req, res) => {
    res.json(cars);
});


module.exports = carRouter;
