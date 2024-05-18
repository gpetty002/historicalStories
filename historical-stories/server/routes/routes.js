// routes.js

const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");
const StoryController = require("../Controllers/StoryController");

console.log("Mounted");

router.use((req, res, next) => {
  console.log("Request to API received: ", req.method, req.url);
  next();
});

// routes
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.post("/stories/filter", StoryController.storiesFiltered);

module.exports = router;
