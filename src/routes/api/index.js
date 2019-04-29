const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')
const profileRouter = require('./user-profile.route')
const gameDataRouter = require('./gameData.route')
const challengeRouter = require('./challenge.route')

router.get('/status', (req, res) => { res.send({status: 'OK'}) }) // api status

router.use('/auth', authRouter)
router.use('/profile', profileRouter)
router.use('/game_data', gameDataRouter)
router.use('/challenge', challengeRouter)

module.exports = router
