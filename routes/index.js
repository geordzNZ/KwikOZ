const express = require('express')
const router= express.Router()


const homeController = require("../controllers/home");
const authController = require("../controllers/auth");

//Login page
// router.get('/', (req, res) =>{
//   res.render('login')
// })
router.get('/', homeController.getIndex)

//Signin page
// router.get('/signin', (req, res) =>{
//   res.render('signin')
// })
router.get('/', authController.getSignIn)

//Signup page
// router.get('/signup', (req, res) =>{
//   res.render('signup')
// })
router.get('/', authController.getSignUp)


// Personal profile page
router.get('/personalprofile', (req, res) =>{
  res.render('personalprofile')
})

//News feed page
router.get('/newsfeed', (req, res) =>{
  res.render('newsfeed')
})





module.exports = router
