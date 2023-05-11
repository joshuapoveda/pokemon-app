const express = require('express')
const app = express()
const pokemon = require("./models/pokemon");
const port = 3000

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());


app.get("/pokemon", (req, res) => {
    res.render("Index", { pokemon });
  });
  
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })

//INDUCES! Be sure to remember this acronym to keep your routes in working order! When working on a backend application, paste this to help you keep track...
// Routes...
// Index : Show all the things! - GET /fruits
// New : An empty form for a new thing - GET /fruits/new
// Delete : Get rid of this particular thing! - DELETE /fruits/:id
// Update : Update this specific thing with this updated form - PUT /fruits/:id
// Create : Make a new thing with this filled out form - POST /fruits
// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit
// Show : Show me this one thing! - GET /fruits/:id (edited)