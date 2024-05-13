// server.js

require("dotenv").config({ path: "../.env" });
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const routes = require("./routes/routes");

console.log(process.env.MONGODB_URI);

const app = express();
app.use(bodyParser.json());

connectDB();

app.use("/", routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
