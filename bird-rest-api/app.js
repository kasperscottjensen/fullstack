// setup

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const {body, validationResult} = require('express-validator');

const Bird = require('./components/bird.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyparser.json());


// data storage

const birds = [];
let globalId = 1;


// endpoints

app.get('/', (req, res) => {
    res.send('bird-rest-api');
});

app.get('/birds', (req, res) => {
    res.status(200).json({status: "collection successfully retrieved", payload: birds});
});

app.get('/birds/:id', (req, res) => {
    const bird = birds.find(bird => bird.id === Number(req.params.id));
    if (bird != null) {
        res.status(200).json({status: "resource successfully retrieved", payload: bird});
    } else {
        res.status(404).json({status: "resource not found"})
    }
});

app.post('/birds', [
        body('id').not().exists(),
        body('name').isString(),
        body('rarity').isNumeric()
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({status: "parameter type mismatch"});
        } else {
            const bird = new Bird(globalId.valueOf(), req.body);
            birds.push(bird);
            res.status(200).json({status: "resource successfully created", payload: bird});
            ++globalId;
        }
});

app.put('/birds/:id', [
    body('id').not().exists(),
    body('name').isString(),
    body('rarity').isNumeric()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({error: "parameter type mismatch"});
    } else {
        const birdToPut = birds.find(bird => bird.id === Number(req.params.id));
        if (birdToPut != null) {
            Object.assign(birdToPut, req.body);
            res.status(200).json({status: "resource successfully updated", payload: birdToPut});
        } else {
            res.status(400).json({status: "resource not found"});
        }
    }
});

app.patch('/birds/:id', [
    body('id').not().exists(),
    body('name').optional().isString(),
    body('rarity').optional().isNumeric()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({status: "parameter type mismatch"});
    } else {
        const birdToPatch = birds.find(bird => bird.id === Number(req.params.id));
        if (birdToPatch != null) {
            Object.assign(birdToPatch, req.body)
            res.status(200).json({status: "resource successfully updated", payload: birdToPatch});
        } else {
            res.status(400).json({status: "resource not found"});
        }
    }
});

app.delete('/birds/:id', (req, res) => {
    const index = birds.findIndex(bird => bird.id === Number(req.params.id));
    if (index === -1) {
        res.status(400).json({status: "resource not found"});
    } else {
        birds.splice(index, 1);
        res.status(200).json({status: "resource successfully deleted"});
    }
});


// port listener

app.listen(port, (error) => {
    console.log('server running on port', port);
});

