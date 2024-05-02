import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRouer from './routes/authRout.js'
import cors from 'cors'
const app = express()


//calling .env file
dotenv.config()
app.use(morgan('dev'))
app.use(express.json())
connectDB();
const corsOptions = {
  origin: 'https://chat-swart-chi-34.vercel.app', // Replace with your frontend app's origin
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
 };
 
 app.use(cors(corsOptions));
 
const port = process.env.PORT || 3000

app.use('/api/auth', authRouer)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`server is running on port ${port}`.green)
})