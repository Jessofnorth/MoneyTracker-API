var express = require("express");
var mongoose = require("mongoose");
// create DB schema for entrys
let entrySchema = new mongoose.Schema({
  title: { type: String, required: true },

  date: { type: Date, required: true, default: Date.now },

  amount: { type: Number, required: true },

  notes: { type: String },

  category_id: { type: String, required: true },
});
module.exports = mongoose.model("Entry", entrySchema);
