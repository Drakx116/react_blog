const users = require('../controllers/users');

const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => users.getAllUsers(req, res))

    .post('/', (req, res) => users.addUser(req, res))

    .put('/', (req, res) => users.updateUser(req, res))

    .delete('/', (req, res) => users.deleteUser(req, res));

module.exports = router;