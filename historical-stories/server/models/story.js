// story.js
const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  content: {
    type: String,
  },
  cultural_focus: {
    type: String,
  },
  genre: {
    type: String,
  },
  period: {
    type: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
  },
  title: {
    type: String,
  },
  themes: {
    type: [String], // Array of strings
    default: [], // Default to an empty array
  },
  source: {
    type: {
      author: {
        type: String,
      },
      title: {
        type: String,
      },
      published: {
        type: Number,
      },
    },
  },
});

module.exports = mongoose.model("Story", storySchema);
