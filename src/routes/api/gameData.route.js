const express = require('express')
const router = express.Router()
let fetch = require('node-fetch')
const config = require('../../config')

const key = config.key // Fortnite Tracker Key

// Get info from API and post to DB.
router.post('/user/:name', async (req, res) => {
  const response = await fetch(`https://api.fortnitetracker.com/v1/profile/pc/${req.params.name}`, {
    headers: {'TRN-Api-Key': key},
    method: 'GET'
  })
  const json = await response.json()

  req.db.collection('gameData').updateOne(
    { accountId: json.accountId },
    json,
    { upsert: true }
  )
  res.send(json)
})

// Get info DB
router.get('/user/:name', async (req, res) => {
  const result = await req.db.collection('gameData').findOne({ epicUserHandle: req.params.name })
  res.send(result)
})

module.exports = router
