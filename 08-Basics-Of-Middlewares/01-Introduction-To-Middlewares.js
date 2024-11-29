/**
 * Introduction to Middlewares: Enhancing Request Processing
 * => EK koi aisa function jiske andr humein 3 chijo ka access mile:
 *    (a) request
 *    (b) response
 *    (c) next
 * => Agar humein as a parameter m ye teeno chije milti hai to uss
 *    function ko hm "middleware" bolnge.
 * 
 * Q. Humaare function m to sirf "req & res" parameter ka access hai?
 * => Third parameter ka v access hai but wo humne likha nhi hai.
 * */ 


const express = require('express');
const app = express();

/**
 * Q. What is middleware?
 * => Jb v browser se hm koi request backend ko bhjte hai to wo apne route
 *    par jaati hai. Agar hum chahte hai ki route pe jaane se pehle wo
 *    request m hm kuch check krna chahte hai ya fir jodna chahte hai to
 *    unn saare cases m middlewares use hote hai.
 * => Client --> Middleware --> Route --> Server
 * 
 * Note: But middleware ko use krne k liye humein "app.use()" k andr likhna
 *       padega. Qki app.use() k andr nhi likhnge to express ko nhi pta
 *       chlega ki ye function ek normal function hai ya fir middleware fn hai.
*/

/**
 * => Sbse pehle request iske 'req' k paas aaega aur ye request ko rkhta hai aur
 *    aage nhi bhjta, means request yhi ruk jaegi. Page loading hota rhega aur
 *    screen m sirf "Hey! I am a middleware!!!" print hoga.
 * => Request ko aage bhjne k liye humein "next()" likhna padega. So, kisi v
 *    middleware function m "next" ka ekhi use hai i.e. jb request wahi ruk gyi
 *    aur aage nhi jaa paa rhi to "next" usse aage uske main route pe le jaegi.
 * 
*/
app.use((req, res, next) => {
    console.log("Hey! I am first middleware!!!");
    next();
})

/**
 * Q. Hum kitne middlwares create kr skte hai?
 * => Hum jitne chahe utne middlwares create kr skte hai.
 * */

app.use((req, res, next) => {
    console.log("Hey! I am 2nd middleware!!!");
    next();
})

app.get('/home', (req, res, next) => {
    res.send('Hello, World!!!');
})


app.listen(3000);


/**
 * => Hey! I am first middleware!!!
 * => Hey! I am 2nd middleware!!!
 * => Hello, World!!!
*/