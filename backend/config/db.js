const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

// Path: backend/config/db.js
// Compare this snippet from backend/server.js:
const db = mongoose.connection;

db.on("connected", () => {
  console.log(`MongoDB connected ${db.name} at ${db.host}:${db.port}`);
});
