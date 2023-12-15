const mongoose=require('mongoose')
const connectionString = 'mongodb+srv://Shore:souvik2003@cluster0.oabegxh.mongodb.net/task-manager?retryWrites=true&w=majority'

const connectDB = (url) => {
    
   return  mongoose.connect(connectionString)
}

module.exports=connectDB
