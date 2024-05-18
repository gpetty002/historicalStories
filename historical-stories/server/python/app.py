# app.py

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process_story', methods=["POST"])
def processStory():
  data = request.json
  genre = data.get("genre")
  date = data.get("date")

  # Process AI model logic
  processedStories = { "message": "Processing complete", "genre": genre, "data": data }

  return jsonify(processedStories)

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5001)