## Historical Stories Requirements

### Languages and frameworks

- Front end: React Native
- Back end: Express.js, Axios, Flask
- Database: MongoDB
- AI Models: OpenAI, Spacy

### Data Collection

This is where I am surveying Black and Brown stories [Historical Stories Collection](https://airtable.com/appSMj8R9vlZ5uev5/paggSlZfvYothcIpt/form)

I am crowdsourcing my historical stories and using OpenAI's API to rewrite them with more details to be more engaging.

### To-Do

- [x] Design UI from wireframe
  - [x] Find color palette to follow
  - [x] Design story of the day feature (only pops up when you first login/signup into the app)
- [x] Hook up MongoDB
  - [x] Create data model and define schemas for user data
  - [ ] Implement CRUD functionalities in components (in the process)
  - [x] Build API Endpoints that will call the CRUD functions to interact with the database
  - [ ] Look into the library Passport.js for auth
  - [ ] Find way to check all of the users in MongoDB
- [x] Research how to tie in AI into generating stories
  - [x] Decide which libraries I want to use for text preprocessing, genre classification, and date filtering (historical eras)
    - [x] Look into spaCy for text preprocessing, HuggingFace Transformers for genre classification, and work with Flask for date (historical eras) filtering
- [ ] Develop OpenAI functionalities
  - [x] Set up a simple response in the back-end and on the press of a genre card, console log what OpenAI sends back
  - [ ] Refine OpenAI's model and fine-tune
    - [ ] Ask historians on campus to assist with the data collection
      - [x] Create an Airtable form to collect process stories
- [ ] Develop Spacy calls for text processing
