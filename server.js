// import cors from 'cors'
import express from "express"
const app=express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from "morgan"


//for file error and not found
import notFoundMiddleware from "./errorhandling/not_found.js"
import errorhandling from "./errorhandling/error_handling.js"

//for  database connection
import connectDB from "./db/connect.js"

//router
import router from "./routes/authrouter.js"

if(process.env.NODE_ENV !== "production"){
    app.use(morgan('dev'))
}
// app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
   
    res.json({msg:'welcome'})
})

app.get('/api/m1',(req,res)=>{
    res.json({msg:'JSON'})
})

app.use('/api/v1/auth',router)
app.use(notFoundMiddleware)
app.use(errorhandling)

const port=process.env.PORT||5000

const start=async()=>{
   try{
    await connectDB(process.env.link)
    
    app.listen(port,()=>{
        console.log(`the server is listening on this port ${port}...`)
    })

   }catch(error){
    console.log(error)
   }

}
start()
