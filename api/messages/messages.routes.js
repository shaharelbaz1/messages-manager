const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const messagesService = require('./messages.service');


router.get('/getMessagesById/:id', function (req, res) {
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

router.get('/getMessagesBySender/:sender', function (req, res) {
    messagesService.getMessagesBySender(req.params.sender)
    .then((results) => {
        if (!results.length) res.status(204).send(results);
        else res.send(results);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
})

router.get('/getMessagesList', function (req, res) {
    messagesService.getMessagesList()
    .then((results) => {
        if (!results.length) res.status(204).send(results);
        else res.send(results);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
})

router.post('/createMessage', function (req, res) {
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

router.put('/updateMessage/:id', function (req, res) {
    if (!ObjectId.isValid(req.params.id))  res.status(400).send({error: "invalid object id"});
    else if (!req.body || !req.body.message || !req.body.sender || !req.body.recipient)  res.status(400).send({error: "invalid parameters"});
    else{
        messagesService.updateMessage(req.params.id, req.body)
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            var status = err.status ? err.status : 500;
            res.status(status).send(err);
        });
    }
})

router.delete('/deleteMessage/:id', function (req, res) {
    if (!ObjectId.isValid(req.params.id))  res.status(400).send({error: "invalid object id"});
    else{
        messagesService.deleteMessage(req.params.id)
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            var status = err.status ? err.status : 500;
            res.status(status).send(err);
        });
    }
})

module.exports = router;
