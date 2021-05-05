const validator = require("validator");
const User = require("../models/User");

// <========== 1) SIGN IN PAGES ==============================
// User clicks the Sign In button from the home page
// If already logged in then goto newsfeed page
// ELSE goto Sign In page
// ---------------------------------
exports.getSignIn = (req, res) => {
  if (req.user) { 
    return res.redirect("/newsfeed.ejs");
  }
  res.render("signin", {
    title: "Sign In for the fun to begin",
  });
};

// TODO:
// - postSignIn form - Vaildation
//      - Validate data
//        - Inputs (req'd fields)
//        - Email address exists in DB
//        - Password matches DB
//      - ERROR ==> Respond with errors / update UI as needed (reload page??)
//      - OK ==> Redirect to Newsfeed Page
// ========== 1) SIGN IN PAGES ==============================>


// <========== 2) SIGN UP PAGES ==============================
// User clicks the Sign Up button from the home page
// IF already logged in then goto newsfeed page
// ELSE goto Sign Up page
// ---------------------------------
exports.getSignUp = (req, res) => {
  if (req.user) { 
    return res.redirect("/newsfeed.ejs");
  }
  res.render("signup", {
    title: "Sign Up for an Account",
  });
};
 
// TODO:
// - postSignUp form - Vaildation
//      - Validate data
//        - Inputs (req'd fields / email format / password length/match)
//        - Duplicate users
//      - ERROR ==> Respond with errors / update UI as needed (reload page??)


const user = new User({
  userID: req.body.userName,
  emailAddr: req.body.email,
  fullName: req.body.fullName,
  password: req.body.password,
});

// TODO:
// - postSignUp form - Save to DB and then login
//      - Save data
//      - OK ==> Redirect to newsfeed page 

// ========== 2) SIGN UP PAGES ==============================>



// ========== 3) LOGOUT ==============================>
// User clicks the logout link/button
// Kill the session
// Redirect to home page
// ---------------------------------
exports.logout = (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

// ========== 2) LOGOUT ==============================>