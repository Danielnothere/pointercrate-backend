const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const demons = [
  { rank: 1, name: "Acheron", creator: "Riot" },
  { rank: 2, name: "Slaughterhouse", creator: "Multiple" }
];

app.get("/api/demons", (req, res) => {
  res.json(demons);
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});