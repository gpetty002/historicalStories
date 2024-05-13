// UserController.js

const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    // extract sign up data from body
    const { username, email, password } = req.body;

    // Create new user
    const newUser = new User({ username, email, password });

    // Save user
    const savedUser = await newUser.save();

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
    console.log(req.body);

    // check password
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User email not found" });
    }

    // const passwordMatch = await bcrypt.compare(password, user.password);

    const passwordMatch = () => {
      if (user.password == password) {
        return true;
      }
      return false;
    };

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
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
    const userData = await User.findOne({ username });

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
