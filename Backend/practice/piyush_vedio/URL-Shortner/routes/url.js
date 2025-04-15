const express = require('express');
const router = express.Router();
const {handleGenerateNewShortURL, handleGetAnalysis} = require('../controllers/url');

router.post('/', handleGenerateNewShortURL);

router.get('/analytics/:shortId', handleGetAnalysis);

module.exports = router;