/**
 * 3. Add data to Maker Model and the Car Model with reference
 *    to maker model.
 * */

async function addMaker(makerData) {
    try {

        // 1. Creating a new Maker
        const maker = new Maker(makerData)
        const newMaker = await maker.save()
        console.log('New maker created:', newMaker)

        // 2. Defining a new Car
        const carData = {
            model: 'Car Model XL',
            year: 2022,
            maker: newMaker._id, // 3. Using created maker's _id earlier
        }

        // 4. Create a new Car
        const car = new Car(carData)
        const newCar = await car.save()
        console.log('New Car:', newCar)
    } catch (error) {
        throw error
    }
}

const makerData = {
    model: 'Toyota',
    logo: 'maker_logo_url1',
    tagline: 'Quality Cars',
}

addMaker(makerData)
