import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import chatbotRoutes from './routes/chatbot.route.js'
import cors from 'cors'
import  path from 'path';

const app =  express()

app.use(express.json())
app.use(cors())

dotenv.config()
const port=process.env.PORT || 3000

const  __dirname  = path.resolve()


// data base 
mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log("MONGO DB CONNECTED SUCESSFULLY")
}).catch(()=>{
     console.log( "ERROR IN CONNECTION")
})


// ROUTES ARE HERE

app.use('/bot/v1',chatbotRoutes)


app.use(express.static(path.join(__dirname,'../frontend/dist')))

if(process.env.NODE_ENV === "PRODUCTION"){
    app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})

}






// app.get('/',(req, res )=>{
// //  res.send("helo world")
// })

app.listen(port,()=>{
    console.log(`sever running  on ${port}`)
})  