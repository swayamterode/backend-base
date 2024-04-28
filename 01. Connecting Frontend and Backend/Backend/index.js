require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Learning Backend form scratch 🚀");
});

const jokes = [
  {
    id: 1,
    joke: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field.",
  },
  {
    id: 2,
    joke: "Why did the tomato turn red?",
    punchline: "Because it saw the salad dressing!",
  },
  {
    id: 3,
    joke: "What do you get when you cross a snowman with a vampire?",
    punchline: "Frostbite.",
  },
  {
    id: 4,
    joke: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything.",
  },
  {
    id: 5,
    joke: "What do you call a fish wearing a crown?",
    punchline: "A king fish.",
  },
];

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
