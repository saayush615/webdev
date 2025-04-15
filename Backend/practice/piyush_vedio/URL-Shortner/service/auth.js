// Hashmap : diary to map session id with user //statefull
// const sessionIdToUserMap = new Map(); // statefull

const jwt = require("jsonwebtoken");
const secret = "Piyush$123@$"; //secret key

function setUser(user){ // in statefull add (id, user)
    // sessionIdToUserMap.set(id,user); // statefull
    return jwt.sign({
        _id: user.id,
        email: user.email,
        role: user.role,
    }, secret);
}

function getUser(token) {
    // const user = sessionIdToUserMap.get(token); // statefull
    if (!token) return null; // If no token is provided, return null

    try {
        return jwt.verify(token, secret); // Verify the token and return the decoded payload
    } catch (err) {
        return null; // If the token is invalid or verification fails, return null
    }
}

module.exports = { setUser, getUser};