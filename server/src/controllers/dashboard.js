const users = require('../models/users');

export const addUser = (req, res) => {
    let newUser = new users.User();

    newUser.save((err, user) => {
        if(err) {
            res.send(err);
        }

        res.json(user);
    });
};
