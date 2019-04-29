const express = require('express')
const router = express.Router()
const config = require('../../config')
const ObjectId = require('mongodb').ObjectId

// Create a kill challenge
router.post('/create/kills', (req, res) => {
  if (!req.query.value || !Number.isInteger(+req.query.value) || !req.query.name) { // Invalid req
    console.log('ERR: Missing parameter')
    res.status(400).send('ERR: Missing parameter')
  } else { // Valid req
    console.log(req.query)

    // Create json payload
    const payload = {
      'game': 'fortnite',
      'name': req.query.name,
      'type': 'kills',
      'value': parseInt(req.query.value),
      'participants': []
    }
    req.db.collection('challenge').insertOne(payload)
    res.send('Kill challenge created')
  }
})

// List challenges
router.get('/list', async (req, res) => {
  await req.db.collection('challenge').find({}).toArray((error, documents) => {
    if (error) {
      throw error
    }
    console.log(documents)
    res.send(documents)
  })
})

// Enter a challenge - WIP
router.post('/enter/:id', async (req, res) => {
  if (!req.params.id || !ObjectId.isValid(req.params.id)) {
    console.log('ERR: Invalid ID')
    res.status(400).send('ERR: Invalid ID')
  } else { // valid
    let r = await req.db.collection('challenge').findOne({_id: ObjectId(req.params.id)})
    console.log(r)
    res.send('Joined')
  }
})

// router.post('/remove/:id', (req, res) => {

// })

module.exports = router
