// StoryController.js

const axios = require("axios");
const Stories = require("../models/story");

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

async function getTodayStory(data) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5001/processTodayStory",
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.log("Error getting today's story", error.message);
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
  const currentYear = new Date().getFullYear(); // Get current year

  try {
    const closestStory = await Stories.aggregate([
      {
        $project: {
          document: "$$ROOT",
          storyYear: "$period.end", // Since period.end is a number (year)
          dateDifference: {
            $abs: {
              $subtract: ["$period.end", currentYear], // Find the closest year
            },
          },
        },
      },
      { $sort: { dateDifference: 1 } }, // Sort by the smallest year difference
      { $limit: 1 }, // Get the closest match
    ]);

    if (closestStory.length > 0) {
      console.log("Closest story by period.end:", closestStory[0].document);
      res.json(closestStory[0].document);
    } else {
      console.log("No stories found.");
      res.status(404).json({ message: "No relevant stories found for today." });
    }
  } catch (error) {
    console.error("Error processing today in history story:", error);
    res.status(500).send("Error processing today in history story");
  }
};
