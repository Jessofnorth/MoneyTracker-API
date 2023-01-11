var express = require('express');
var router = express.Router();

// DB connection - MongoDB Atlas via mongoose
const uri = "mongodb+srv://jessofnorth:MorsLillaOlle92@moneytracker.tiojbdq.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;


let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function (callback) {
  console.log("Connected to database");
  // create DB schema for entrys
  let entrySchema = mongoose.Schema({
    name: String,
  });
  let Entry = mongoose.model("Entry", entrySchema);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

});
module.exports = router;
