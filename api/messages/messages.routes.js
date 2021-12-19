const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const messagesService = require('./messages.service');

router.get('/', function (req, res) {
    messagesService.getMessagesList()
    .then((results) => {
        if (!results.length) res.status(204).send(results);
        else res.send(results);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
})

router.get('/:id', function (req, res) {
    if (!ObjectId.isValid(req.params.id))  res.status(400).send({error: "invalid object id"});
    else{
        messagesService.getMessagesById(req.params.id)
        .then((results) => {
            if (!results.length) res.status(204).send(results);
            else res.send(results);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
    }
})

router.post('/', function (req, res) {
    if (!req.body || !req.body.message || !req.body.sender || !req.body.recipient)  res.status(400).send({error: "invalid parameters"});
    else{
        messagesService.createMessage(req.body)
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
    }
})

router.put('/:id', function (req, res) {
    if (!ObjectId.isValid(req.params.id))  res.status(400).send({error: "invalid object id"});
    else if (!req.body || !req.body.message || !req.body.sender || !req.body.recipient)  res.status(400).send({error: "invalid parameters"});
    else{
        messagesService.updateMessage(req.params.id, req.body)
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            if (err.status) res.status(err.status).send({error: err.error});
            else res.status(500).send(err);
        });
    }
})

router.delete('/:id', function (req, res) {
    if (!ObjectId.isValid(req.params.id))  res.status(400).send({error: "invalid object id"});
    else{
        messagesService.deleteMessage(req.params.id)
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            if (err.status) res.status(err.status).send({error: err.error});
            else res.status(500).send(err);    
        });
    }
})

module.exports = router;
