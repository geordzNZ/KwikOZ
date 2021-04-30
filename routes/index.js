const express = require('express')

const route = express.Router()

//Login page
route.get('/', (req, res) =>{
  res.render('login')
})

//Signup page
route.get('/signup', (req, res) =>{
  res.render('signup')
})


// Personal profile page
route.get('/personalprofile', (req, res) =>{
  res.render('personalprofile')
})

//News feed page
route.get('/newsfeed', (req, res) =>{
  res.render('newsfeed')
})



route.post('')


module.exports = route
