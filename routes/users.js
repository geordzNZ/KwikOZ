const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
//User Model
const User = require('../models/User')


//Login page
router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})


//Register
router.post('/register', (req, res) => {

  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      //If the user already exists
      if (user) {
        errors.push({ msg: 'An account registered to this Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        //Hash the password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
        //Set password to the hash value
            newUser.password = hash;
        //Save the new User
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

//Login
router.post('/login', (req, res, next) =>{
  passport.authenticate('local', {
    successRedirect: '/personalprofile',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next)
})


//logout
router.get('/logout', (req, res) =>{
  req.logout()
  req.flash('success_msg', 'You are logged out')
  res.redirect('/users/login')
})
module.exports = router
