const mongoose = require('../database/conection');

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: false,
    },
    password: {
        type: String,
        require: true,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;