# storyProcessing.py

import json
from openai import OpenAI
import os
import random
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '../../.env'))

client = OpenAI(api_key = os.getenv("OPENAI_API_KEY"))

def getRandomHistoricalDate():
  historicalDates = [
    # Ancient History (Before 500 AD)
        ("Mesopotamia", -3500, -539),
        ("Ancient Egypt", -3100, -332),
        ("Harappan Civilization", -3300, -1300),
        ("Xia Dynasty", -2070, -1600),
        ("Shang Dynasty", -1600, -1046),
        ("Zhou Dynasty", -1046, -256),
        ("Ancient Greece", -800, -146),
        ("Ancient Rome", -753, 476),
        ("Mayan Civilization", -2000, 1500),
        ("Ancient Armenia", -600, 428),
        ("Maurya Empire", -322, -185),
        ("Gupta Empire", 320, 550),
        
        # Medieval Period (500 AD - 1500 AD)
        ("Early Middle Ages", 500, 1000),
        ("High Middle Ages", 1000, 1300),
        ("Late Middle Ages", 1300, 1500),
        ("Byzantine Empire", 330, 1453),
        ("Islamic Golden Age", 750, 1258),
        ("Kingdom of Ghana", 300, 1200),
        ("Mali Empire", 1235, 1600),
        ("Inca Empire", 1438, 1533),
        ("Armenian Kingdom of Cilicia", 1080, 1375),
        ("Delhi Sultanate", 1206, 1526),
        
        # Early Modern Period (1500 AD - 1800 AD)
        ("Renaissance", 1300, 1600),
        ("Age of Discovery", 1400, 1700),
        ("Ming Dynasty", 1368, 1644),
        ("Mughal Empire", 1526, 1857),
        ("Aztec Empire", 1428, 1521),
        ("Safavid Empire", 1501, 1736),
        
        # Modern Period (1800 AD - Present)
        ("Industrial Revolution", 1760, 1840),
        ("World Wars Era", 1914, 1945),
        ("Armenian Genocide", 1915, 1917),
        ("Partition of India", 1947, 1947),
        ("Post-War Era", 1945, 2000),
  ]

  period = random.choice(historicalDates)
  name, startYear, endYear = period
  randomYear = random.randint(startYear, endYear)
  return randomYear

def generateRandomStory(date, genre):
  # Create a function to choose a random date in history
  prompt = f"""
    Write a long detailed historical story about {genre} that centers on Black and Brown civilizations in the year {date}. Please format the output into a JSON array with objects containing the following fields:
    - title
    - content
    - genre
    - period
    - culturalFocus
    Example format:
    [
      {{
        "title": "Legend of the Mayan Sun",
        "content": "In the ancient city of Tikal, a young warrior named Ajaw...",
        "genre": "Mythology",
        "period": "Pre-Columbian",
        "culturalFocus": "Mayans"
      }},
      ...
    ]

  """

  response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    response_format={"type": "json_object"},
    messages=[
      {"role": "system", "content": "You are a helpful assistant designed to generate historical stories that center on Black and Brown civilizations."},
      {"role": "user", "content": prompt},
    ],
    max_tokens=3000,
    temperature=0.7,
  )

  try:
    story = json.loads(response.choices[0].message.content.strip())
    return story
  except json.JSONDecodeError as e:
    print("Error decoding JSON", e)
  return []