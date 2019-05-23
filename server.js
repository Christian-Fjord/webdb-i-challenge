const express = require('express');
const server = express();

const db = require('./data/accounts-model');

server.use(express.json());

  //find,
  //findById,
  //add,
  //remove,
  //update

  // Get

server.get('/api/accounts', (req, res) => {
  db.find()
    .then( action => {
      res.status(200).json(action)
    })
    .catch( error => {
      res.status(500).json({error:{message: "The item(s) you tried to get could not be gotten."}})
    })
} )

// Get By ID

server.get('/api/accounts/:id', (req, res) => {
  const id = req.params.id

  db.findById(id)
    .then( getId => {
      res.status(200).json(getId)
    })
    .catch( error => {
      res.status(500).json({error:{message: ' The ID could not be found.'}})
    })
})

// Post || Create

  server.post('/api/accounts', (req, res) => {
    const newPost = req.body

    db.add(newPost)
      .then(post => {
        res.status(200).json(post)
      })
      .catch( error => {
        res.status(500).json({error:{message: 'Could not complete Post.'}})
      })
  })

  // Update

server.put('/api/accounts/:id', (req, res) => {
  const updatePost = req.body
  const id = req.params.id

  db.update(id, updatePost)
    .then( update => {
      res.status(200).json(update)
    })
    .catch( error => {
      res.status(500).json({error:{message: 'Could not Update the Post.'}})
    })
})


// Delete 

server.delete('/api/accounts/"id', (req, res) => {
  const id = req.params.id

  db.remove(id)
    .then( remove => {
      if (remove) {
        db.remove(remove)
          .then(removePost => {
            res.status(200).json(removePost)
          })
      } else {
        res.status(404).json({error:{message: 'Could not Delete the Post.'}})
      }
    })
    .catch( error => {
      res.status(500).json({error:{message: 'Could not Comprehend.'}})
    })
})

module.exports = server;