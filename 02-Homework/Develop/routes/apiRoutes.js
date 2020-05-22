//Dependencies//
const express = require("express");
const fs = require("fs");
const shortid = require('shortid');

//Express
const app = express();

const notes = [];

// Routing
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        fs.readFile("db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            return res.json(JSON.parse(data));
        })
    })

    app.post("/api/notes", function (req, res) {
        fs.readFile("db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            const array = JSON.parse(data)
            const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: shortid.generate(),
            };
            array.push(newNote)
            //console.log(newNote.id);
            fs.writeFile("db/db.json", JSON.stringify(array), function (err2, data2) {
                if (err2) throw err2;
                res.json(JSON.stringify(data2));
            });
        })

    })
    app.delete('/api/notes/:id', function (req, res) {
        const deleteID = req.params.id
        fs.readFile("db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            const array = JSON.parse(data)
            const index = array.findIndex(ob => ob.id == deleteID)
            console.log(index)
            array.splice(index, 1)
            fs.writeFile("db/db.json", JSON.stringify(array), function (err2, data2) {
                if (err2) throw err2;
                res.json(JSON.stringify(data2));
            });
        })
    })

}