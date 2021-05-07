

//TODO:
// SIGN UP FORM
// Validate data entry:
//    - Email address:
//        - has an @   (MVP)
//        - maybe try to validate .com/.co.  If we are feeling brave  (STRETCH)
//    - Password:
//        - Length = <size>   (MVP)
//        - Special chars / numbers   (STRETCH)
//    - Req'd fields
//        - Username   (MVP)
//        - Email address   (MVP)
//        - Password   (MVP)
//        - Fullname   (MVP)
// Validate against DB
//    - Email address ==> Unique in DB   (MVP)


// SIGN IN FORM
// Validate data entry
//    - Email address:
//        - has an @   (MVP)
//        - maybe try to validate .com/.co.  If we are feeling brave   (STRETCH)
// Validate against DB
//    - Email address ==> exists in DB   (MVP)
//    - Password ==> matches the db entry   (MVP)

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
