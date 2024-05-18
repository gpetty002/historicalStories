// StoryController.js

const axios = require("axios");

async function callPythonService(data) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5001/processStory",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.log("Error calling Python service", error.message);
    throw error;
  }
}

exports.storiesFiltered = async (req, res) => {
  const { genre, date, random } = req.body;

  if (random) {
    // create a function to choose a random date in history
  }

  try {
    const filteredStories = await callPythonService({ genre, date });
    res.json(filteredStories);
  } catch {
    res.status(500).send("Error processing stories");
  }
};
