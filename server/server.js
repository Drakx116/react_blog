// Routes
const dashboard = require('./src/routes/dashboard');
const users = require('./src/routes/users');

// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Express
const app = new express;
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/react_blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// API EndPoint
app.use("/", dashboard);
app.use("/users", users);

// Runs server
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`)}
);
