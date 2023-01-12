var express = require('express');
 var mongoose = require('mongoose');
 // create DB schema for categories
 let categorySchema = new mongoose.Schema({
    name: String,
  });
  module.exports = mongoose.model("Category", categorySchema);
