const User  = require('../models/users');

const getAllUsers = (req, res) => {
    User.find({}, (error, users) => {
       if (error) {
           res.status(400).send(error);
       }

       res.send(users);
    });
};

const addUser = (req ,res) => {
    let newUser = new User(req.body);

    let pseudo  = req.body.pseudo;
    let password = req.body.password;

    newUser.save((error, user) => {
        if(error) {
            res.status(404).send(error);
        }

        if(!(pseudo && password)) {
            res.status(400).send('Invalid parameters.')
        }

        // TODO : Encrypt password

        res.status(201).send(user)
    });
};

module.exports = { getAllUsers, addUser };
