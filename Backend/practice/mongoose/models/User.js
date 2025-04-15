const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, min: 0},
    email:{type: String, require: true},
    Date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User',userSchema);