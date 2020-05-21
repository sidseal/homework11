//Dependencies//
const express = require("express");

//Express
const app = express();

const fs = require("fs");

const notes = [];

// Routing
module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        fs.readFile("db/db.json", "utf8", function(err, data){
            if(err)throw err;
            res.json(JSON.parse(data));
          })
        })
    };
    app.post("/api/notes", function(req, res) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
        };
    });
    app.delete('/api/notes/:id', function (req, res) {})

        


      
    


