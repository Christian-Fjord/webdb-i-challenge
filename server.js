const express = require('express');
const server = express();

const db = require('./data/accounts-model');

server.use(express.json());


// Get

server.get('/api/accounts', (req, res) => {
  db.get()
    .then( get => {
      res.status(200).json(get)
    })
    .catch( error => {
      res.status(500).json({error:{message: "The item(s) you tried to get could not be gotten."}})
    })
} )

// Get By ID

server.get('/api/accounts/:id', (req, res) => {
  const id = req.params.id

  db.getById(id)
    .then( getId => {
      res.status(200).json(getId)
    })
    .catch( error => {
      res.status(500).json({error:{message: ' The ID could not be found.'}})
    })
})


module.exports = server;