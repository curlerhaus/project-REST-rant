const express = require('express');
const app = express();
require('dotenv').config();

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));


app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.render('error404')
})

app.use(express.urlencoded({extended: true}))

app.listen(process.env.PORT, function () {
    console.log(`Server is running on port ${process.env.PORT}\n
    http://localhost:${process.env.PORT}`);
})


