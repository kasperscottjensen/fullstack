// imports
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

// setup
const port = 3000;
const app = express();
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(cors());

// navigation
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

// api


// port listener
app.listen(port, () => {
    console.log('server running on port ' + port);
});

// export
module.exports = app;
