const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');
const morgan = require('morgan');
const { port } = require('./config');

//Inicializacion
const app = express();

//Settings
app.set('port', port);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//Rutas
app.use(require('./routes/index.routes'));

module.exports = app;
