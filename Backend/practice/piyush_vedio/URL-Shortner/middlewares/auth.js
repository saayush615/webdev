const { getUser } = require('../service/auth');

function checkForAuthentication(req,res,next) {
    const tokenCookie = req.cookies?.token; // Get the 'token' cookie from the request
    req.user = null; // Initialize req.user as null
    if(!tokenCookie) {
        return next(); // If no token is found, proceed to the next middleware
    }

    const token = tokenCookie; // Extract the token from the cookie(Improves code readability)
    const user = getUser(token); // Verify the token and get the user object

    req.user = user; // Attach the user object to req.user
    return next();
}

function restrictTo(roles = []) { //initialize an array of roles
    return function(req,res,next) {
        if(!req.user) return res.redirect("/login");

        if(!roles.includes(req.user.role)) return res.end('Unauthorized!');

        next();
    }
}

async function restrictToLoginUserOnly(req,res,next) {
    const userUid = req.cookies?.uid;
    // req.cookies contains all cookies sent by the client.
// The optional chaining operator (?.) ensures that if req.cookies is undefined or null, it won't throw an error. Instead, userUid will be undefined.

    if(!userUid) return res.redirect("/login");
    const user = getUser(userUid);

    if(!user) return res.redirect("/login");

    req.user = user;
//     Attaches the logged-in user's information to the req object.
// Makes the user object accessible in subsequent middleware or route handlers.
    next();

    //*** for header based authentcation or token authentication*** 

    // const userUid = req.headers["authorization"];
    // if(!userUid) return res.redirect("/login");
    // const token = userUid.split('Bearer ')[1];  // Bearer token
    // const user = getUser(token);

    // if(!user) return res.redirect("/login");

    // req.user = user;
    // next();
}

async function checkAuth(req,res,next) {
    const userUid = req.cookies?.uid;
    // req.cookies contains all cookies sent by the client.
// The optional chaining operator (?.) ensures that if req.cookies is undefined or null, it won't throw an error. Instead, userUid will be undefined.

    const user = getUser(userUid);

    req.user = user;
//     Attaches the logged-in user's information to the req object.
// Makes the user object accessible in subsequent middleware or route handlers.
    next();
}

module.exports = { checkForAuthentication, restrictTo };