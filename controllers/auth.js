

// <========== 1) SIGN IN PAGES ==============================
// User clicks the Sign In button
// If already logged in then goto newsfeed page
// ELSE goto Sign In page
exports.getSignIn = (req, res) => {
  if (req.user) { 
    return res.redirect("/newsfeed.ejs");
  }
  res.render("signin", {
    title: "Sign In for the fun to begin",
  });
};

// ========== 1) SIGN IN PAGES ==============================>


// <========== 2) SIGN UP PAGES ==============================
// User clicks the Sign Up button
// IF already logged in then goto newsfeed page
// ELSE oto Sign Up page
exports.getSignUp = (req, res) => {
  if (req.user) { 
    return res.redirect("/newsfeed.ejs");
  }
  res.render("signup", {
    title: "Sign Up for an Account",
  });
};


// ========== 2) SIGN UP PAGES ==============================>