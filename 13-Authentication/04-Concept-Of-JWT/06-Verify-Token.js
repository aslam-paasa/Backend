/**
 * Verify the token:
 * Q. Verify a JWT token using your secret and print the decoded
 *    payload.
 * */ 

/**
 * Explanation:
 * 1. In this exercise, the authenticity of a JWT token is verified
 *    using the jwt.verify method. 
 * 2. If the token is valid and hasn't been tampered with, the method
 *    returns the decoded payload contained within the token.
 * Note: If the token is valid then based on that token we will perform
 *       our operations like ecommerce purchase, payment etc. It means
 *       agar token match krte hai to user ko saare operations k liye
 *       allow kro, else deny kr do.
*/


/**
 * 
 * Whatever token we have created before, put that inside this fn with
 * the secret.
 * Note: Try with different secret and also without secret.
*/
const decoded = jwt.verify({ token, secret });
console.log({ decoded });
