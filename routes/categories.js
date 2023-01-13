var express = require("express");
var router = express.Router();
var server = require('../server.js');
//import schemas/models
var Category = require("../models/Category.js");

/* GET ALL*/
//get all categories from db and stringify from json
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    let jsonObj = JSON.stringify(categories);
    res.contentType("application/json");
    res.send(jsonObj);
  } catch (e) {
    //send error message and status 500
    res.status(500).json({ message: e.message });
  }
});

//GET ONE BY ID
//get a category by id from db, use middleware function getCategory
router.get("/:id", getCategory, (req, res) => {
  res.send(res.category);
});

//DELETE ONE
//delete a category by id from db, use middleware function getCategory
router.delete("/:id", getCategory, async (req, res) => {
  try {
    await res.category.remove();
    res.json({message: "Category deleted."})
  } catch (e) {
    //send error message and status 500
    res.status(500).json({ message: e.message });
  }
});

//POST ONE
////create a new category in db, use model/schema to set objects

router.post("/", async (req, res) => {
  // new category object 
  let categoryNew = new Category({
    name: req.body.name,
  });
  try {
    const categorySaved = await categoryNew.save();
    res.status(201).send(categorySaved);
  } catch (e) {
    //send error message and status 400
    res.status(400).json({ message: e.message });
  }
});


//UPDATE ONE
//Patch a category by id from db, use middleware function getCategory

router.patch("/:id", getCategory, async (req, res) => {
  if(req.body.name != null){
    res.category.name = req.body.name
  }
  try {
    const categoryUpdated = await res.category.save();
    res.send(categoryUpdated);
  } catch (e) {
    //send error message and status 500
    res.status(400).json({ message: e.message });
  }
});


//middleware function - gets specific category by id for routes that uses id
async function getCategory(req, res, next) {
  let category;
  try {
    //find category by using the id sent in request
    category = await Category.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: "No category with that ID." });
    }
  } catch (e) {
    //send error message and status 500
    return res.status(500).json({ message: e.message });
  }
  //set the category object to res.category
  res.category = category;
  next();
}

module.exports = router;
