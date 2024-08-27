/**
 * Express Session:
 * => Browser m data save krne k liye cookie hota hai.
 * => Server m data save krne k liye session hota hai.
 * 
 * => npm install express-session
 * => Jb hum Express Session use krnge to basically hum server pr
 *    data save krnge. Lekin uska ek downside hai, agar server
 *    restart hua restart hua to jo v data save kiya hoga wo saara
 *    loose ho jaega.
 * */ 

const express = require('express');
const app = express();
const expressSession = require('express-session');

/**
 * => Isko call kr k kuch options provide krna jaruri hai:
 *    (a) secret: Hum jo v secret rkhte hai usi k basis pe humaara
 *        poora session encode hota hai. We will see later.
 *    (b) resave: Agar humaare session k kuch v changes nhi hua to
 *        kya hum usse fir se save krne chahenge. => False
 *    (c) saveUninitialized: Agar user humaare website server pe aaya,
 *        to avi wo just aaya aur usne naa login kiya hai aur naa kisi
 *        tarah ka session create hua hai backend pe to aise user ko
 *        v kya save krna hai => False.
 * => Ab hum koi v route pe session ko create or read kr skte hai.
*/
app.use(expressSession({
    secret: "random stuff",
    resave: false,
    saveUninitialized: false
}));

/**
 * Q. How to create and read session?
*/
app.get('/create', (req, res, next) => {
    req.session.polo = true;
    res.send("done");
})