require("dotenv").config(); // allows us to use .env file
require("./config/db"); // connect to the database
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

app = express();
const PORT = process.env.PORT || 3001;

/*
    Middleware
    1. express.json() - allows us to use req.body (for POST requests )
    2. morgan("dev") - logs requests to the console

*/
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/card", require("./routes/api/cards"));

// Serve static assets if in production
app.get("/", (req, res) => {
  res.send("Hello");
  next();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT} is up and running !`);
});
