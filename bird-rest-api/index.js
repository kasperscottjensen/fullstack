// setup

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyparser.json());


// data storage

let birds = [
    {id: 1, name: 'macaw'},
    {id: 2, name: 'toucan'},
    {id: 3, name: 'ibis'},
    {id: 4, name: 'pigeon'}
];


// endpoints

app.get('/', (req, res) => {
    res.send('bird-rest-api');
});

app.get('/birds', (req, res) => {
    res.json(users);
});

app.get('/birds/:id', (req, res) => {
    let result = birds.find((bird) => bird.id === Number(req.params.id));
    res.json(result);
});


// port listener

app.listen(port, () => {
    console.log('server running on port ' + port);
});

