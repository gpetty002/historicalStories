// userProfile.js

const mongoose = require("mongoose");

const userProfileScema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "UserAuth",
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  dateLastRead: {
    type: Date,
    default: Date.now(),
  },
  bookmarkedStories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
  likedGenres: [String],
});

module.exports = mongoose.model("UserProfile", userProfileScema);
