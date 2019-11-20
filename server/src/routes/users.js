const dashboard = require('../controllers/dashboard');

const express = require('express');
const router = express.Router();

// Route prefix : /users
router('/')
    .get((req, res) => {
        res.json({
            'id': 1,
            'pseudo': "Drakx116",
            'job': "Back-End Developer"
        });
    })
    .post((req, res) => {
        dashboard.addUser(req, res)
    });

module.exports = router;
