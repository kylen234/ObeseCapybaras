const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./server/db');
const router = require('./server/routes');

const app = express();
const apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('/', (req, res) => {
        res.send('Hello World!')
    });
}

// app.use()

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));