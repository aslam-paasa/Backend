/**
 * Let's now enhance the Movie Model with Ratings and Reviews:
 * */

/**
 * 1. Update the Movie Model to include ratings & reviews field:
*/

const movieSchema = new mongoose.Schema({
    ratings: [
        {
            type: Number,
            min: 0,
            max: 10,
        },
    ],
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            text: String, // Add a field for review text
        },
    ],
})
const Movie = mongoose.model('Movie', movieSchema)
