import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

// const PORT= process.env.PORT  || 4000

const app = express()


app.use(express.json())
app.use(cors({
  origin: 'https://debproject-18i6.vercel.app/', // or '*', but for production use the actual frontend URL
  credentials: true // if sending cookies/auth
}))
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req,res)=> res.send ('API Working'))

// app.listen (PORT , ()=> console.log ('Server running on port' + PORT));

export default app;

