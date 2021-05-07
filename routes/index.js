const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../controllers/auth')

//Landing page
router.get('/', (req, res) => {
  res.render('welcome')
})

//dashboard
router.get('/personalprofile', ensureAuthenticated, (req, res) => {
  res.render('personalprofile', {
    name: req.user.name
  })
})

module.exports = router
