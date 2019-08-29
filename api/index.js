// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
// App
const app = express();
// Router
const router = require('./routes');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(8030, () => console.log('Servidor corriendo en puerto 8030'));