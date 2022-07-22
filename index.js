const express = require('express');
const app = express();
require('dotenv').config();

app.use('/places', require('./contollers/places'))

app.get('/', (req, res) => {
    res.send(`Hello World!`)
});

app.get('*', (res, req) => {
    res.status(404).send(`<h1>404 Page</h1>`)
})

app.listen(process.env.PORT, function () {
    console.log(`Server is running on port ${process.env.PORT}\n
    http://localhost:${process.env.PORT}`);
})