const express = require('express');
const app = express();

//CORS error handler
app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
app.use('/index', (request, response) => {
    response.status(200).json({ message: 'well done' })
})
module.exports = app;