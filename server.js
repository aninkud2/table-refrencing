require('dotenv').config()
const express = require ('express');
const mongoose = require('mongoose')
const blogRoute = require('./route/route')
const commentRouter = require('./route/commentRoute')

const PORT = 1200;
const app = express()
app.use(express.json())

app.use('/api',blogRoute)
app.use('/api',commentRouter)

app.get('/',(req,res) => {
    res.status(200).json({
        message: "WELCOME"
        }) 
})

const Db = process.env.DATABASE

mongoose.set('strictQuery',true);
mongoose.connect(Db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongooseDB Conneted ");
}).catch((error)=>{
    console.log(error.message)
}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port:` + PORT)
      })
})
