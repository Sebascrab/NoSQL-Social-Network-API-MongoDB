
// mongoose as the orm;
const mongoose = require('mongoose');


// connection to mongo compass
mongoose.connect('mongodb://127.0.0.1/27017/socialDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;