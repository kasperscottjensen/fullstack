// setup

const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));


// endpoints

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/notindex', (req, res) => {
    res.sendFile(__dirname + '/public/html/notindex.html');
});


// port listener

app.listen(port, () => {
    console.log('server running on port', port);
});
