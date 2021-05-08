
const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../controllers/auth')


const homeController = require("../controllers/home");
const authController = require("../controllers/auth");

//Splash page
router.get('/', homeController.getIndex)

//Signin page
router.get('/signin', authController.getSignIn)

//Signup page
//router.get('/signup', authController.getSignUp)


// Personal profile page
router.get('/personalprofile', (req, res) => res.render('personalprofile'))
//Landing page
//router.get('/', (req, res) => res.render('welcome') )

//dashboard
router.get('/personalprofile', ensureAuthenticated, (req, res) => {
  res.render('personalprofile', {
    name: req.user.name
  })
})

module.exports = router
