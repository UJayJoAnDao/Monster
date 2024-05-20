const express = require('express');
const router = express.Router();

// Login route
router.get('/login', (req, res) => {
    res.send('Login page');
});

// Home page route
router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;