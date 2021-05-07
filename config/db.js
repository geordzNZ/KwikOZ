const mongoose = require('mongoose')

const connectDB = async () =>{
  try {
  const connect = await mongoose.connect("DB_string", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  console.log(`Connected to database :${connect.connection.host}`)
} catch (err) {
  console.error(err)
  process.exit(1)
  }
}

module.exports = connectDB
