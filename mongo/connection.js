const mongoose = require('mongoose');
const config = require('../config');
var db = mongoose.connection;
var firstConnect = true;

db.on('error', function(err) {
  console.error("Database connection error".red);
  if(!firstConnect) connectWithRetry();
});
db.on('connecting', function () {
  console.info("Database connecting".cyan);
});
db.on('open', function() {
  console.info("Database connection established".green);
});
db.on('reconnected', function () {
  console.info("Database reconnected".green);
});

var connectWithRetry = function() {
  return  mongoose.connect(config.mongo_url, function(err){
    if(err){
      mongoose.disconnect();
      console.info("Failed to connect to mongo db. Retrying");
      setTimeout(connectWithRetry, 5000);
    }
    else{
      firstConnect = false;
    }
  });
};

module.exports = exports =  connectWithRetry();