// story.js

const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  dateGenerated: {
    type: Date,
    default: Date.now,
  },
  storyText: {
    type: String,
  },
  genres: [String],
});

module.exports = mongoose.model("Story", storySchema);
