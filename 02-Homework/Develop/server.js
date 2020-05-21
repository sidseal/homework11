//Dependencies//
const express = require("express");

//Express
const app = express();

//Port
const PORT = process.env.PORT || 8080;

//Express to data parse to JSON
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});




