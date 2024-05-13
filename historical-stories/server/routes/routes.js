// routes.js

const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");

console.log("Mounted");

router.use((req, res, next) => {
  console.log("Request to API received: ", req.method, req.url);
  next();
});

// routes
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.get("/userData", UserController.getUserData);

module.exports = router;
