const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    pseudo: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

export const User = mongoose.Model('User', schema);
