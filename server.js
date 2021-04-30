const express = require('express')
const morgan = require('morgan')
const ejs = require('ejs')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })
const connectDB = require('./config/db')
connectDB()


const app = express()
//setting up the view engine
app.set('view engine', 'ejs')

//setting the static folder
app.use(express.static('public'))

//Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', require('./routes/index'))
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server is running in port ${PORT}`))
