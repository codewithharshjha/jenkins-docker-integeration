require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    console.log({MONGO_URI:process.env.MONGO_URI})
    await mongoose.connect(
      // "mongodb://hjha3987_db_user:Hjha3987%40db_user@127.0.0.1:27017/ecom?authSource=admin"|| 'mongodb://localhost:27017/devops-ecommerce',
'mongodb://localhost:27017/devops-ecommerce',
// "mongodb+srv://hjha3987_db_user:Hjha3987%40@cluster0.ssyyzih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )

    console.log('MongoDB connection SUCCESS')
  } catch (error) {
    console.error('MongoDB connection FAIL : ',error)
    process.exit(1)
  }
}

module.exports = {connectDB}
