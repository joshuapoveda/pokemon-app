const express = require("express");
const Pokemon = require("./models/pokemon");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//middleware should be before your routes
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
//allows us to see user input
app.use(express.urlencoded({ extended: false }));

////

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemon: allPokemon,
    });
  });
});
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

app.post("/pokemon/", (req, res) => {
  Pokemon.create(req.body, (error, createdPokemon) => {
    res.send("/pokemon");
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}!!!!!`);
});

//INDUCES! Be sure to remember this acronym to keep your routes in working order! When working on a backend application, paste this to help you keep track...
// Routes...
// Index : Show all the things! - GET /fruits
// New : An empty form for a new thing - GET /fruits/new
// Delete : Get rid of this particular thing! - DELETE /fruits/:id
// Update : Update this specific thing with this updated form - PUT /fruits/:id
// Create : Make a new thing with this filled out form - POST /fruits
// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit
// Show : Show me this one thing! - GET /fruits/:id (edited)
