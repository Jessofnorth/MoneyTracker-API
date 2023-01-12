var express = require('express');
var router = express.Router();
var Category = require('../models/Category.js')
var Entry = require('../models/Entry.js')

 
/* GET home page. */
router.get("/", function (req, res, next) {
  // get courses from DB
  Category.find(function (err, entrys) {
    if (err) return console.error(err);
    let jsonObj = JSON.stringify(entrys);
    res.contentType("application/json");
    res.send(jsonObj);
  });
});

module.exports = router;
