var express = require('express');
var router = express.Router();
var server = require('../server.js');
//import schemas/models
var Entry = require('../models/Entry.js');

/* GET ALL*/
//get all entries from db and stringify from json
router.get("/", async (req, res) => {
  try {
    const entries = await Entry.find();
    let jsonObj = JSON.stringify(entries);
    res.contentType("application/json");
    res.send(jsonObj);
  } catch (e) {
    //send error message and status 500
    res.status(500).json({ message: e.message });
  }
});

//GET ONE BY ID
//get a entry by id from db, use middleware function getEntry
router.get("/:id", getEntry, (req, res) => {
  res.send(res.entry);
});

//DELETE ONE
//delete a entry by id from db, use middleware function getEntry
router.delete("/:id", getEntry, async (req, res) => {
  try {
    await res.entry.remove();
    res.json({message: "Entry deleted."})
  } catch (e) {
    //send error message and status 500
    res.status(500).json({ message: e.message });
  }
});

//POST ONE
////create a new entry in db, use model/schema to set objects

router.post("/", async (req, res) => {
  // new entry object 
  let entryNew = new Entry({
    title: req.body.title,
    date: req.body.date,
    amount: req.body.amount,
    notes: req.body.notes,
    category_id: req.body.category_id
  });
  try {
    const entrySaved = await entryNew.save();
    res.status(201).send(entrySaved);
  } catch (e) {
    //send error message and status 400
    res.status(400).json({ message: e.message });
  }
});

//UPDATE ONE
//Patch a entry by id from db, use middleware function getEntry

router.patch("/:id", getEntry, async (req, res) => {
  if(req.body.title != null){
    res.entry.title = req.body.title
  }
  if(req.body.date != null){
    res.entry.date = req.body.date
  }
  if(req.body.amount != null){
    res.entry.amount = req.body.amount
  }
  if(req.body.notes != null){
    res.entry.notes = req.body.notes
  }
  if(req.body.category_id != null){
    res.entry.category_id = req.body.category_id
  }
  try {
    const entryUpdated = await res.entry.save();
    res.send(entryUpdated);
  } catch (e) {
    //send error message and status 500
    res.status(400).json({ message: e.message });
  }
});

//middleware function - gets specific entry by id for routes that uses params.id
async function getEntry(req, res, next) {
  let entry;
  try {
    //find entry by using the id sent in request
    entry = await Entry.findById(req.params.id);
    if (entry == null) {
      return res.status(404).json({ message: "No entry with that ID." });
    }
  } catch (e) {
    //send error message and status 500
    return res.status(500).json({ message: e.message });
  }
  //set the entry object to res.entry
  res.entry = entry;
  next();
}

module.exports = router;
