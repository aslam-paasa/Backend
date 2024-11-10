/**
 * Writing custom middleware for validation:
 * => Creating Custom Middleware function that checks if the request
 *    has a query parameter named validate.
 * 
 * 
 * Note: Observe how the placement of middlewares affects the execution
 *       order compared to other middleware.
*/

const express = require('express');
const app = express();

const carsRouter = require('./cars.router');

app.use(express.json());


/**
 * Custom middleware for validation:
 * Here, the validationMiddleware is applied to the route that retrieves
 * a specific car by ID. If the query parameter validate is set to true,
 * the middlware allows the request to proceed; otherwise, it returns
 * a forbidden error.
*/
const validationMiddleware = (req, res, next) => {
    const validateParam = req.query.validate
    if (validateParam === 'true') {
        next() // Proceed to the next middleware or route handler
    } else {
        res.status(403).json({ error: 'Validation failed' }) // Return error response
    }
}


/**
 * Applying custom middleware to a specific route:
*/
app.get('/cars/:id', validationMiddleware, (req, res) => {
    // Route logic to retrieve car by ID
})


app.use('/cars', carsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
