// StoryController.js

const axios = require("axios");

async function getStory(data) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5001/processStory",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.log("Error getting story", error.message);
    throw error;
  }
}

async function getRandomStory(data) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5001/processRandomStory",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.log("Error getting random story", error.message);
    throw error;
  }
}

exports.storiesRandom = async (req, res) => {
  const { genre } = req.body;
  try {
    const randomStory = await getRandomStory({ genre });
    res.json(randomStory);
  } catch {
    res.status(500).send("Error processing stories");
  }
};

exports.storiesSearch = async (req, res) => {
  const { genre, date } = req.body;

  try {
    const story = await getStory({ genre, date });
    res.json(story);
  } catch {
    res.status(500).send("Error processing random story");
  }
};
