/**
 * Previously we were using the same token for everyone. But how can
 * we generate different tokens for different users?
 * */ 

/**
 * Create a simple token:
 * Q. Create a simple JWT token without an expiration time.
*/

/**
 * Explanation:
 * 1. jsonwebtoken library is used to create a JWT token.
 * 2. The jwr.sign method takes two main arguments:
 *    a. the payload(in this case, { foo: 'bar' })
 *    b. the secret key used for signing.
 * 3. This produces a signed token that contains the payload data. The
 *    resulting token can be shared with clients or stored for later use.
 * 4. Keep in mind that this token does not have an expiration time, so
 *    it will remain valid until it's manually invalidated or revoked.
*/



















/**
 * Generate a secret.
 * Q. Generate a secret for signing and verifying JWTs.
 * 
 * Understanding:
 * Node.js contains built-in crypto module to generate a random secret
 * key for signing and verifying JWTs.
 * 
 * The crypto module provides a secure way to generate random data, which
 * is crucial for maintaining the security of your JWTs.
 * 
 * Note: In the terminal, generate a secret and store it in your .env:
 *       node -e "console.log(require('crypto').randomBytes(256).toString('base64));"
*/