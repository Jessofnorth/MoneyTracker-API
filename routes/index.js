var express = require('express');
var router = express.Router();

// DB connection - MongoDB Atlas via mongoose
const uri = "mongodb+srv://jessofnorth:MoneyTracker@moneytracker.tiojbdq.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'MoneyTracker',
});
mongoose.Promise = global.Promise; 


let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function (callback) {
  console.log("Connected to server");
  // create DB schema for entrys
  let entrySchema = new mongoose.Schema({
    title: String,
    date: String,
    amount: Number,
  });
  let Entry = mongoose.model("Entry", entrySchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  // get courses from DB
  Entry.find(function (err, entrys) {
    if (err) return console.error(err);
    let jsonObj = JSON.stringify(entrys);
    res.contentType("application/json");
    res.send(jsonObj);
  });
});

});
module.exports = router;
