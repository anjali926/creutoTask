import express from 'express'
import 'dotenv/config'
import connectDB from './database/db.js'
import bookRoutes from './routes/bookRoutes.js'

const app=express()
const PORT=process.env.PORT||3000

app.use(express.json())

app.use('/api/book',bookRoutes)


app.listen(PORT,()=>{
    connectDB()
    console.log("server is listening at port:", PORT );
})
