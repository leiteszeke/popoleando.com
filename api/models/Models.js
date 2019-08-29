const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/popoleando', { useNewUrlParser: true }, err => {
    if (err) throw err;
    console.log('Connected');
});

module.exports = exports = mongoose;