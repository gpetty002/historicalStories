## Historical Stories Requirements

### Languages and frameworks

- Front end: React Native
- Back end: Express.js, Axios, Flask
- Database: MongoDB
- AI Models: OpenAI, Spacy

### To-Do

- [x] Design UI from wireframe
  - [x] Find color palette to follow
- [x] Hook up MongoDB
  - [x] Create data model and define schemas for user data
  - [ ] Implement CRUD functionalities in components (in the process)
  - [x] Build API Endpoints that will call the CRUD functions to interact with the database
  - [ ] Look into the library Passport.js for auth
- [x] Research how to tie in AI into generating stories
  - [x] Decide which libraries I want to use for text preprocessing, genre classification, and date filtering (historical eras)
    - [x] Look into spaCy for text preprocessing, HuggingFace Transformers for genre classification, and work with Flask for date (historical eras) filtering
- [ ] Develop OpenAI functionalities
  - [ ] Set up a simple response in the back-end and on the press of a genre card, console log what OpenAI sends back
- [ ] Develop Spacy calls for text processing
