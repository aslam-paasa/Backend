/**
 * Learn to update data:
 * Q. Update a Movie by Id:
 * => Create a function updateMovie that accepts a movie ID and an objects
 *    with updated data, and updates the movie with the provided ID. 
 * 
 * Note: This is reference code:

        async function updateCatById(catId, updateData) {
            try {
                const updatedCat = await Cat.findByIdAndUpdate(catId, updateData, {
                    new: true,
                })
                if (updatedCat) {
                    console.log('Updated cat:', updatedCat)
                } else {
                    console.log('Cat not found')
                }
            } catch (error) {
                console.error('Error updating cat:', error)
            }
        }
        // Example usage:
        updateCatById('your-cat-id', { age: 4 })
 *
 * */


/**
* Importing mongoose:
*/
const mongoose = require('mongoose');


/**
 * Assuming this is the path to your movie model:
*/
const Movie = require('./01-movie-Schema');


/**
 * Connect to MongoDB:
*/
mongoose.connect("mongodb+srv://aslampaasa420:Sy********er0.goyedz2.mongodb.net/studentDB", {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});


/**
 * Update Movie by Id:
*/
async function updateMovie(movieId, updatedData) {
    try {
        /**
         * new: true => means return the modified document rather than the original.
         * */ 
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, updatedData, {
            new: true,
        })
        // title is also unique, so we can also find by title
        // Movie.findOneAndUpdate({ title: title }, updatedData, { new:true })
        console.log('Updated movie:', updatedMovie)
    } catch (error) {
        throw error
    }
}


/**
 * Call the function with a movie ID, updated data, and log the result:
 * => An id is generated by default when we create a document.
 * */
updateMovie('your-movie-id-here', { rating: 8.5 })
const selectedMovie = await Movie.findById(movieId)
selectedMovie.rating = updatedRating
selectedMovie.save()



