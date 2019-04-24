const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')
const profileRouter = require('./user-profile.route')
const gameDataRouter = require('./gameData.route')

router.get('/status', (req, res) => { res.send({status: 'OK'}) }) // api status

router.use('/auth', authRouter)
router.use('/profile', profileRouter)
router.use('/game_data', gameDataRouter)

module.exports = router
