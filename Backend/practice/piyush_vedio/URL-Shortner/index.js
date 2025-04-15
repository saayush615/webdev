const {v4: uuidv4} = require('uuid');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {connectToMongoDB} = require('./connect');

const { checkForAuthentication, restrictTo } = require('./middlewares/auth')

const URL = require('./models/url');

const urlRoute = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRoute = require('./routes/user')

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(checkForAuthentication);

connectToMongoDB("mongodb://localhost:27017/short-url")
.then(() => { console.log('Connected to MongoDB'); });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use('/url', restrictTo(['NORMAL', 'ADMIN']), urlRoute);
app.use('/user', userRoute);
app.use('/', staticRouter);

// app.get("/test", async (req,res) => { 
//     const allUrls = await URL.find({});
//     return res.render('home', {urls: allUrls});
//  })

app.get('/url/:shortId', async (req,res) => { 
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId}, {$push: {visitHistory: {timestamp: Date.now()}}
    });
    res.redirect(entry.redirectUrl);
 })

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
    
 })