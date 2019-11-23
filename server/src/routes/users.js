const users = require('../controllers/users');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    users.getAllUsers(req, res);
});

router.post('/', (req, res) => {
    users.addUser(req, res);
});

module.exports = router;