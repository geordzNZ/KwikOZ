const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const dotenv = require('dotenv')
  dotenv.config({ path: './config/.env' })
  const app = express()
  require('./controllers/validator')(passport)


// // -GK
// const dotenv = require('dotenv')
//   dotenv.config({ path: './config/.env' })
//
// const connectDB = require('./config/db')
//   connectDB()
//
//
// //Routes - GK
// const homeRoutes = require("./routes/index");
//
// const app = express()
// //setting up the view engine
// app.set('view engine', 'ejs')
//
//setting the static folder
app.use(express.static('public'))
//
// //Parser
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.use('/', require('./routes/index'))
// const PORT = process.env.PORT || 3000
//
// // Setup Sessions - stored in MongoDB - GK
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );


//Routes - GK
// app.use("/",homeRoutes)
//
// app.listen(process.env.PORT || PORT, console.log(`Server is running in port ${PORT}`))






//DB
// const db = require('./config/db').MongoURL

// Connect to db
// mongoose.connect(db,{
//   useUnifiedTopology: true ,
//   useNewUrlParser: true })
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err))



const connectDB = require('./config/db')
  connectDB()


//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

//bodyParser
app.use(express.urlencoded({extended: false}))

//Express middleware
app.use(session({
  secret: 'socialapp',
  resave: true,
  saveUninitialized: true,
}))

//Passport middleWare
app.use(passport.initialize())
app.use(passport.session())


//Connect flash
app.use(flash())

//Global variables
app.use((req, res, next)=> {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')

  next()
})

//ROUTES
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
