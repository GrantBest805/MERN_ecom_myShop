import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useCreateIndex: true
    })
    console.log(`MongoDB Connected: ${dbConnection.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
  }
}

export default connectDB;