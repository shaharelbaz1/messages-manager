const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const messagesSchema = require('../mongo/models/messages.model');
const isPalindrome = require('../middleware/palindrome');



router.get('/getMessagesById/:id', function (req, res) {
    if (!ObjectId.isValid(req.params.id))  res.status(400).send({error: "invalid object id"});
    else{
        messagesSchema.model.find({_id: req.params.id}, function(err, results){
            if (err) res.status(500).send(err);
            else res.send(results);
        })
    }
})

router.get('/getMessagesBySender/:sender', function (req, res) {
    messagesSchema.model.find({sender: req.params.sender}, function(err, results){
        if (err) res.status(500).send(err);
        else res.send(results);
    })
})

router.get('/getMessagesList', function (req, res) {
    messagesSchema.model.find({}, function(err, results){
        if (err) res.status(500).send(err);
        else res.send(results);
    })
})

router.post('/createMessage', async function (req, res) {
    var palindrome = await isPalindrome(req.body.message);
    var message = {message: req.body.message, palindrome: palindrome, sender: req.body.sender, recipient: req.body.recipient, createdAt: new Date(), updatedAt: new Date()}
    messagesSchema.model.create(message, function(err, results){
        if (err) res.status(500).send(err);
        else res.send({msg: "message was created successfully"});
    })
})

router.put('/updateMessage/:id', async function (req, res) {
    if (!ObjectId.isValid(req.params.id))  res.status(400).send({error: "invalid object id"});
    else{
        var palindrome = await isPalindrome(req.body.message);
        var message = {message: req.body.message, palindrome: palindrome, sender: req.body.sender, recipient: req.body.recipient, updatedAt: new Date()}
        messagesSchema.model.findOneAndUpdate({_id: req.params.id}, message, function(err, results){
            if (err) res.status(500).send(err);
            if (results == null) res.status(404).send({msg: "message not found"});
            else res.send({msg: "message was updated successfully"});
        })
    }
})

router.delete('/deleteMessage/:id', function (req, res) {
    if (!ObjectId.isValid(req.params.id))  res.status(400).send({error: "invalid object id"});
    else{
        messagesSchema.model.findOneAndDelete({_id: req.params.id}, function(err, results){
            if (err) res.status(500).send(err);
            if (results == null) res.status(404).send({msg: "message not found"});
            else res.send({msg: "message was deleted successfully"});
        })
    }
})

module.exports = router;
