require('dotenv').config();

const mongoose = require('mongoose');
const SECRET = process.env.LINK;

mongoose.connect(SECRET, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;