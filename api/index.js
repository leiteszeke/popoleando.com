// Dependencies
const express = require('express');
// App
const app = express();
// Models
const User = require('./models/User');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const user = new User({ name: 'Ezequiel', lastname: 'Leites' });

    user.save(err => {
        console.log(err);
    })

    User.find({}).exec((err, users) => {
        console.log(err, users);
    })

    res.send({});
})

app.listen(9000, () => console.log('Servidor corriendo en puerto 9000'));