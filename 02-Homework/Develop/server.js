//Dependencies//
const express = require("express");

//Express
const app = express();

//Port
const PORT = 8080;

//Express to data parse to JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});




