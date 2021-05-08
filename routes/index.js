
const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../controllers/auth')

//CONTROLLERS
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");


//PAGE ROUTES

  //Splash page
  router.get('/', homeController.getIndex)
  //router.get('/', (req, res) => res.render('welcome') )

  //Signin page
  router.get('/signin', authController.getSignIn)

  //Signup page
  router.get('/signup', authController.getSignUp)


  // Personal profile page
  router.get('/personalprofile', (req, res) => res.render('personalprofile'))


//dashboard --- GKXX - commented out this section to get working
// router.get('/personalprofile', ensureAuthenticated, (req, res) => {
//   res.render('personalprofile', {
//     name: req.user.name
//   })
// })

module.exports = router
