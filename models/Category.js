var express = require('express');
 var mongoose = require('mongoose');
 // create DB schema for categories
 let categorySchema = new mongoose.Schema({
    name: {
      type: String,
    required: true},
    maxbudget: {
      type: Number,
    required: true},
  });
  module.exports = mongoose.model("Category", categorySchema);
