const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;
const PUB_DIR = path.resolve(__dirname, '..', 'public');

app.use(morgan('dev'));
app.use(express.static(PUB_DIR));

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`listening on port ${PORT} :D`);
    }
});