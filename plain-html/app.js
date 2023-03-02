// setup

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(cors());


// data storage

const data = [
    {id: 1, name: "this is the data name", age: 10, other: "this is something else"},
    {id: 2, name: "this is another data name", age: 20, other: "this is something else entirely"}
];


// endpoints

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/notindex', (req, res) => {
    res.sendFile(__dirname + '/public/html/notindex.html');
});

app.get('/api/data', (req, res) => {
    res.status(200).json(data);
});


// port listener

app.listen(port, () => {
    console.log('server running on port', port);
});
