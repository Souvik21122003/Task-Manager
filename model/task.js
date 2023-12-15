const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        maxlength: [20, 'max length cannot be more than 20 letters'],
        trim:true,
    },
    completed: {
        type: Boolean,
        default:false
    },
})

const Task=mongoose.model('Task', TaskSchema)
module.exports =Task