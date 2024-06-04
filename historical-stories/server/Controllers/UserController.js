// UserController.js

const UserAuth = require("../models/userAuth");
const UserProfile = require("../models/userProfile");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const comparePasswords = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
};

exports.signup = async (req, res) => {
  try {
    // extract sign up data from body
    const { username, email, password } = req.body;

    // check if user exists
    const existingUser = await UserAuth.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = new UserAuth({ username, email, password: hashedPassword });

    // Save user
    const savedUser = await newUser.save();

    // Create user profile data
    const newUserProfile = new UserProfile({ userId: savedUser._id });
    await newUserProfile.save();

    // Send response
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

exports.login = async (req, res) => {
  try {
    // get email and password
    const { email, password } = req.body;

    // find user using email
    const user = await UserAuth.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User email not found" });
    }

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error logging in: ", error);
    res.status(500).json({ error: "Logging in auth error" });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const { username } = req.query;

    // find user
    const userData = await UserAuth.findOne({ username });

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    // send user data
    res.status(200).json(userData);
  } catch (error) {
    console.log("Error fetching user data: ", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
};
