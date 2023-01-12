var express = require('express');
 var mongoose = require('mongoose');
  // create DB schema for entrys
  let entrySchema = new mongoose.Schema({
    title: String,
    date: String,
    amount: Number,
  });
  module.exports = mongoose.model("Entry", entrySchema);
