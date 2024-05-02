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

app.use(cors());
app.use(cors({
  origin: 'https://chat-fd2x4vm36-ayushtretiya0811s-projects.vercel.app' // Replace with your React app's origin
 }));
const port = process.env.PORT || 3000

app.use('/api/auth', authRouer)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`server is running on port ${port}`.green)
})