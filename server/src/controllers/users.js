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

    if(!(pseudo && password)) {
        res.status(400).send({
            message: 'Invalid parameters.'
        });
    }

    newUser.save((error, user) => {
        if(error) {
            res.status(404).send(error);
        }

        // TODO : Encrypt password

        res.status(201).json(user)
    });
};

const updateUser = (req, res) => {
    User.updateOne({ _id : req.headers.userid}, req.body, (error, updatedUser) => {
        if(error) {
            res.send(error);
        }

        res.send({
            'message': 'Updated User',
            'user': updatedUser
        })
    });
};

const deleteUser = (req, res) => {
    User.deleteOne({_id : req.body.userId }, (error) => {
        if(error) {
            res.send(error);
        }

        res.send("User well deleted.")
    });
};

module.exports = { getAllUsers, addUser, updateUser, deleteUser };
