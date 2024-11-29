/**
 * Hashing:
 * - Hashing ek aisa process hai jisme hm kisi v data ko hash m convert
 *   krte hai i.e. secret code: hdcicugwvibkcau7674qerjhekwjflmer.
 * - Ye hash main mainly 32-digit ka rhega jo alphabets & numbers ka
 *   combination rehta hai.
 * - Kisi v data ko hash m convert krne k liye hm ek algorithm use krte 
 *   hai jo mere data ko secret code m convert krta hai.
 * 
 * Q. Why we use hashing?
 * => Jb hm database m user ka id & password store krte hai to wo as
 *    it is hardcoded store ho jaata hai. It means koi v employee kisi
 *    company m ye hardcoded password dekh skta hai, which is not 
 *    secured way to store user credentials in database. That is why
 *    we convert the user's credentials to hash and store that hash
 *    in our db.
 * 
 * Some of the famous hashing algorithms are:
 * 1. md5
 * 2. SHA1
 * 3. SHA512
 * 4. bcrypt
 * => Use any of these algorithms we can convert our data into hash.
*/

/**
 * Understanding Bcrypt:
 * Bcrypting is required for password security. It hashes password with
 * unique salts, making them resistant to attacks, such as brute force
 * and rainbow tables. The cost factor adds an extra layer of security,
 * and bcrypt can adapt to evolving hardware for long-term protection.
 * 1. Generate a Salt:
 *    Use bcrypt.genSalt(10) to create a random 'salt' with a cost factor
 *    of 10. The salt enhances security by making each password hash unique.
 * 2. Hash the Password:
 *    Apply bcrypt.hash(password, salt) to securely hash the user's password
 *    with the generated salt. Store this hashed password in your database.
 * 
 * - Library: npm i bcrypt
*/

/**
 * Signup with bcrypted password:
 * 1. If the username is not taken, hash the provided password surely
 *    using bcrypt with a salt.
 *    a. Import the bcryt library at the beginning of your life.
 *    b. Generate a salt using bcrypt.genSalt() with a cast factor of 10.
 *    c. Hash the user's password using bcrypt.hash() with generated salt.
 *    d. Store the hashed password in the users array along with the
 *       username.
 * */ 


const express = require('express');
const app = express();

/**
 * Import Bcrypt:
*/
const bcrypt = require('bcrypt');


/**
 * API Routes
*/
app.post('/signup', async (req, res) => {
    const [username, password] = req.body;

    /**
     * Checks if the username is already taken
    */
   const userExists = users.some((user) => user.username === username);

   if(userExists) {
    res.status(400).json({ message: 'Username already taken' });
   } else {
    /**
     * Converting password into hash:
     * - Humaara hash 2 chij leta hai:
     *   a. req.body.password [actual password]
     *   b. genSalt(10) [This randomizes & complicates our actual 
     *      password into hash]
     * - This hashed password is then pushed to the db which is not
     *   human readable. So, the developers or hackers are not able
     *   to see the user's credentials.
    */
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(users); // to test
    users.push({ username, password: hashedPassword })
    const token = "abcdefghi";
    res.status(201).json({ message: 'Registration successful', token });
   }
});


/**
 * Server started
*/
app.listen(3000, () => {
    console.log('server started');
});