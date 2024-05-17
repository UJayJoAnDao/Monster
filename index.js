const express = require('express');

const app = express();

// Login route
app.get('/login', (req, res) => {
    res.send('Login page');
});

// Home page route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});