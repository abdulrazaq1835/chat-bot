import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import chatbotRoutes from './routes/chatbot.route.js'
import cors from 'cors'

const app =  express()

app.use(express.json())
app.use(cors())

dotenv.config()
const port=process.env.PORT || 3000


// data base 
mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log("MONGO DB CONNECTED SUCESSFULLY")
}).catch(()=>{
     console.log( "ERROR IN CONNECTION")
})


// ROUTES ARE HERE

app.use('/bot/v1',chatbotRoutes)







app.get('/',(req, res )=>{
 res.send("helo world")
})

app.listen(port,()=>{
    console.log(`sever running  on ${port}`)
})