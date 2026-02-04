const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected to MongoDB" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
