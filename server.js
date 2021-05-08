const express = require('express')
const session = require("express-session");
//const MongoStore = require("connect-mongo")(session);
const morgan = require('morgan')
const ejs = require('ejs')
const dotenv = require('dotenv')
  dotenv.config({ path: './config/.env' })

// const connectDB = require('./config/db')
//   connectDB()


//Routes - GK
const homeRoutes = require("./routes/index");

const app = express()

//setting up the view engine
app.set('view engine', 'ejs')

//setting the static folder
app.use(express.static('public'))

//Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//app.use('/', require('./routes/index'))
const PORT = process.env.PORT || 3000

// Setup Sessions - stored in MongoDB - GK
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );


//Routes - GK
app.use("/", homeRoutes)

app.listen(PORT, console.log(`Server is running in port ${PORT}`))
