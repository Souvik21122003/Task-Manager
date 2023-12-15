
const connectDB=require('./db/connect')
const express = require('express')
const task = require('./routes/task')
const bodyParser = require('body-parser')
require('dotenv').config()
const errorHandler=require('./middleware/error')

//const Task = require('./model/task')


const app = express()
app.use(errorHandler)
app.use(express.static('./public'))
app.use(bodyParser.json())
const port = 3000;
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => { console.log(`server is listening to port ${port}`) })   
    } catch (error) {
        console.log(error);
    }
}
start()
app.use('/api/v1/tasks',task)
