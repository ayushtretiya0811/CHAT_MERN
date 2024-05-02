import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn =  await mongoose.connect(process.env.MONGOOS_URL)
        console.log('mongo db connected successfully'.green)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;