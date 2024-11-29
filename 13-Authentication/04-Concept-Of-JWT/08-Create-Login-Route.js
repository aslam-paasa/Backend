/**
 * Create a login route:
 * 1. Create a POST route "/login" that accepts a username and password
 *    in the request body.
 * 2. Assume that the username and password are correct for this username.
 * 3. Generate a JWT token with a user ID and return it in the response
 *    along with the username.
 * Note: Earlier we have written token verification code. Now we will
 *       create an app route for inside this route we will keep our
 *       verification token. And this route is known as login route.
 * */ 

app.post("/login", (req, res) => {
    const { username, password } = req.body.user;
    const token = jwt.sign({ userId: "1234" }, secret, { expiresIn: '24h' });
    res.json({ username, token });
})
