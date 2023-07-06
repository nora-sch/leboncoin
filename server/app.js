const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("LEBONCOIN");
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});