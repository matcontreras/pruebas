const express = require('express');
const server = express();
const colors = require('colors');
const path = require('path');
const fs = require('fs');
const webRoutes = require('./routes/webRoutes');


//settings
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

//middlewares (para enviar datos por post)
server.use(express.json());
//server.use(express.urlencoded());

//routes
server.use(webRoutes);

module.exports = server;