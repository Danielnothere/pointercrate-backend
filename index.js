const express = require("express");
const cors = require("cors");

const app = express();

// Allow requests from your frontend
app.use(cors());

// Parse JSON
app.use(express.json());

// Sample data
const demons = [
  { rank: 1, name: "Personal Hell", creator: "deadlocked992", difficulty: "Extreme Demon", verifier: "Not Verified" },
  { rank: 2, name: "forgotten clubstep", creator: "deadlocked992", difficulty: "Extreme Demon", verifier: "Not Verified" }
];

// API route
app.get("/api/demons", (req, res) => {
  res.json(demons);
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// IMPORTANT for Railway
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});