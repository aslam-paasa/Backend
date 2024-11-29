/**
 * Creating a token with expiry:
 * Q. Create a JWT token with a specified expiration time(e.g., 1 hour)
 * */ 

/**
 * Explanation:
 * 1. Extend the previous example by adding an expiration time to the
 *    JWT token.
 * 2. The { expiresIn: '1h' } option in the jwt.sign method specifies
 *    that the token should expire in one hour.
 * 3. This is useful for implementing token-based authentication with
 *    short-lived tokens.
 * 4. After the specified time period (1 hour in this case), the token
 *    will no longer be valid, and the user will need to re-authenticate.
*/

const jwt = require('jsonwebtoken');
const secret = "your-secret-goes-here"; // Replace with your secret key

const token = jwt.sign({ foo: 'bar' }, secret, { expiresIn: '1h' }); // foo: 'bar' is payload
console.log({ token });
