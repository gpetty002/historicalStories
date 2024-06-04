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

exports.storiesToday = async (req, res) => {
  const { date } = req.body;
  try {
    // we would create another fetch that asks the Python back end for a story that happened today.
    const story = {
      title: "Creation of Maya",
      content:
        "Today in history, we look at the story of the Popol Vuh, or Popol Wuj in the K'iche language which is the story of creation of the Maya. Members of the royal K'iche lineages that had once ruled the highlands of Guatemala recorded the story in the 16th century to preserve it under the Spanish colonial rule...",
      genre: "Action",
      period: "16th century",
      culturalFocus: "Mayan",
    };
    res.json(story);
  } catch {
    res.status(500).send("Error processing today in history story");
  }
};
