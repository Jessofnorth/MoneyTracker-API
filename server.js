var express = require('express');
// DB connection - MongoDB Atlas via mongoose to db named "MoneyTracker"
const uri = "mongodb+srv://jessofnorth:MoneyTracker@moneytracker.tiojbdq.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'MoneyTracker',
});
mongoose.Promise = global.Promise; 

//messages if connection is ok or not 
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function (callback) {
  console.log("Connected to server");})

  module.exports = db;