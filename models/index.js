// Connexió amb BBDD
const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/projecte-llibres', {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports.Llibre = require('./llibre');
module.exports.User = require("./user");