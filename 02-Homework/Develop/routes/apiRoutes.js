const noteData = require("../data/notes")

// Routing
module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
      res.json(noteData);
    });

    app.post("/api/notes", function(req, res) {
          tableData.push(req.body);
          res.json(true);
    });
    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user')
    });
}

      
    


