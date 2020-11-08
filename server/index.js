const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const PORT = 3000;
const PUB_DIR = path.resolve(__dirname, '..', 'public');

app.use(morgan('dev'));
app.use(express.static(PUB_DIR));
app.use(express.json()); // alternative to body parser

app.post('/shop', (req, res) => {
    let dataObj = req.body;
    db.save(dataObj)
        .then(() => {
            res.sendStatus(201);
        })
        .catch(() => {
            console.log('err in db.save catch block of server');
        });
});

// app.get('/users:name', (req, res) => {
app.get('/shop/:name', (req, res) => {
    let searchName = req.params.name;
    // console.log('THE NAME FROM URL PARAMS:', searchName.split(''));
    db.find(searchName)
        .then((doc) => {
            console.log('hiiiii');
            res.send(doc);
        })
        .catch((err) => {
            console.log('error with db.find, likely no match', err);
        });
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`listening on port ${PORT} :D`);
    }
});