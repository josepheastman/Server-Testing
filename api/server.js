const express = require("express");
const knex = require("knex");

const knexConfig = require("../knexfile.js");

const server = express();

const db = knex(knexConfig.development);

server.use(express.json());

server.get("/", (req, res) => {
  db("characters")
    .then(characters => {
      console.log("check");
      if (characters) {
        res.status(200).json(characters);
        console.log("check");
      } else {
        res.status(404).json({ error: "Characters not found" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The characters information could not be retrieved." })
    );
});

server.get("/characters", (req, res) => {
  const { firstName, lastName } = req.body;
  res.status(200).json({ Working: `${firstName} ${lastName}` });
});

server.post("/greet", (req, res) => {
  const { firstName, lastName } = req.body;

  if (firstName && lastName) {
    res.status(201).json({ hello: `${firstName} ${lastName}` });
  } else {
    res.status(400).end();
  }
});

server.post("/characters", (req, res) => {
  const changes = req.body;

  db.insert(changes)
    .into("characters")
    .then(character => {
      res.status(201).json(character);
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the character to the database."
      });
    });
});

server.delete("/characters/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json(id);
});

server.delete("/characters/:id", (req, res) => {
  const { id } = req.params;
  db("characters")
    .where({ id: id })
    .del()
    .then(count => {
      if (count) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ error: "Character not found" });
      }
    })
    .catch(err =>
      res.status(500).json({ error: "The character could not be removed." })
    );
});

module.exports = server;
