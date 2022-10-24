const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const places = require("./data/places.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

// all places
app.get("/places", (req, res) => {
  res.send(places);
});

// place with id
app.get("/places/:id", (req, res) => {
  const id = req.params.id;

  const place = places.find(place => place.id === id);

  res.send(place);
});

//app listening to port
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
