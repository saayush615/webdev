const mongoose = require('mongoose');
const user = require('./models/User');

async function main(){
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('✅ You are connected to Mongodb');

    // const newuser = new user({name: "Aayush", age: 18, email: "saayush615@gamil.com"});
    // newuser.save();
    // console.log('Entry', newuser);

    // const newuser2 = new user({name: "Raj", age: 20, email: "raj615@gamil.com"});
    // newuser2.save();
    // console.log('Entry', newuser2);

    // const newuser3 = new user({name: "Asutosh", age: 22, email: "asu774@gamil.com"});
    // newuser3.save();
    // console.log('Entry', newuser3);

    // const users = await user.find({age: {$gt: 18}});
    // console.log('All user are: ', users)

    
}

main().catch(err => console.log(err));