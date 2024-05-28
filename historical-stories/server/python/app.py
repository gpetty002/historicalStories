# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import storyProcessing as sp

app = Flask(__name__)
CORS(app)

@app.route('/processStory', methods=["POST"])
def processStory():
  data = request.json
  genre = data.get("genre")
  date = data.get("date")

  # Process AI model logic
  processedStories = { "message": "Processing complete", "genre": genre, "date": date }

  return jsonify(processedStories)

@app.route('/processRandomStory', methods=["POST"])
def processRandomStory():
  data = request.json
  genre = data.get("genre")
  date = sp.getRandomHistoricalDate()

  story = sp.generateRandomStory(date, genre)

  return story

if __name__ == "__main__":
  app.run(host="127.0.0.1", port=5001, debug=True)