const messagesSchema = require('../../mongo/models/messages.model');
const isPalindrome = require('../../middleware/palindrome');

function getMessagesById(id){
    return new Promise((resolve, reject) => {
        messagesSchema.model.find({_id: id}, function(err, results){
            if (err) reject(err);
            else resolve(results);
        })
    })
 }

 function getMessagesBySender(sender){
    return new Promise((resolve, reject) => {
        messagesSchema.model.find({sender: sender}, function(err, results){
            if (err) reject(err);
            else resolve(results);
        })
    })
 }

 function getMessagesList(){
    return new Promise((resolve, reject) => {
        messagesSchema.model.find({}, function(err, results){
            if (err) reject(err);
            else resolve(results);
        })
    })
 }

 function createMessage(body){
    return new Promise(async (resolve, reject) => {
        var palindrome = await isPalindrome(body.message);
        var message = {message: body.message, palindrome: palindrome, sender: body.sender, recipient: body.recipient, createdAt: new Date(), updatedAt: new Date()}
        messagesSchema.model.create(message, function(err, results){
            if (err) reject(err);
            else resolve({msg: "message was created successfully"});
        })
    })
 }

 function updateMessage(id, body){
    return new Promise(async (resolve, reject) => {
        var palindrome = await isPalindrome(body.message);
        var message = {message: body.message, palindrome: palindrome, sender: body.sender, recipient: body.recipient, updatedAt: new Date()}
        messagesSchema.model.findOneAndUpdate({_id: id}, message, function(err, results){
            if (err) reject(err);
            if (results == null) reject({status: 404, msg: "message not found"});
            else resolve({msg: "message was updated successfully"});
        })
    })
 }

 function deleteMessage(id){
    return new Promise((resolve, reject) => {
        messagesSchema.model.findOneAndDelete({_id: id}, function(err, results){
            if (err) reject(err);
            if (results == null) reject({status: 404, msg: "message not found"});
            else resolve({msg: "message was deleted successfully"});
        })
    })
 }

 module.exports = {
     getMessagesById,
     getMessagesBySender,
     getMessagesList,
     createMessage,
     updateMessage,
     deleteMessage
 }