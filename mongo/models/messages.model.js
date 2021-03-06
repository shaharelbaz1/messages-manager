var mongoose = require('mongoose');

  var messagesSchema = new mongoose.Schema({
    message: { type: String },
    palindrome: { type: Boolean },
    sender: { type: String},
    recipient: { type: String},
    createdAt: {type: Date},
    updatedAt: {type: Date}
  });

exports.model = mongoose.model('messages', messagesSchema);
