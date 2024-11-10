/**
 * 3. How can we add data to our Maker model & Car Model?
 * => Add data to Maker Model and the Car Model with reference
 *    to maker model.
 * */

async function addMaker(makerData) {
    try {

        /**
         * 1. Creating a new Maker
        */ 
        const maker = new Maker(makerData)
        const newMaker = await maker.save()
        console.log('New maker created:', newMaker)
        
        /**
         * 2. Defining a new Car
        */ 
        const carData = {
            model: 'Car Model XL',
            year: 2022,
            /**
             * 3. Using created maker's _id earlier
            */ 
            maker: newMaker._id, 
        }

        /**
         * 4. Create a new Car
        */
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


/**
 * If we save the data like this:
 * 1. Define Maker once
 *    {
 *        _id: "3489y439834001", 
 *        name: "Maruti Suzuki", 
 *        logo: "something.com/pic.jpg"
 *        tagline: ""
 *    }
 * 
 * 2. And then refer to  it:
 *    {
 *        name: "800",
 *        year: 2022,
 *        maker: "3489y439834001"
 *    }
 * 
 *    {
 *        name: "Omni",
 *        year: 2022,
 *        maker: "3489y439834001"
 *    }
 * 
 * It will come like this:
 *    {
 *        name: "800",
 *        year: 2022,
 *        maker: {
 *                  _id: "3489y439834001", 
 *                  name: "Maruti Suzuki", 
 *                  logo: "something.com/pic.jpg"
 *                  tagline: ""
 *               }
 *    }
 * 
 *    {
 *        name: "Omni",
 *        year: 2022,
 *        maker: {
 *                  _id: "3489y439834001", 
 *                  name: "Maruti Suzuki", 
 *                  logo: "something.com/pic.jpg"
 *                  tagline: ""
 *               }
 *    }
*/