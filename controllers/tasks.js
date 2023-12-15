const Task = require('../model/task')
const asyncWrapper=require('../middleware/async')



const getAllTasks = asyncWrapper(async (req,res)=>
{
     const tasks = await Task.find({})
     res.status(200).json({ tasks })
}) 
   
    
   

const getTask = async(req, res) => {
     try {
          const { id: taskID } = req.params
          const task = await Task.findOne({ _id: taskID })
          
          if (!task)
          {
          return res.status(404).json({msg:`no tasks found with that id`})     
          }
          res.status(200).json({task})
          console.log(task);
          
     } catch (error) {
          res.status(400).json({msg:error})
     }
}

const createTask = async (req, res) => {
     try {
          
          const task = await Task.create(req.body)
          res.status(201).json({task})
     } catch (error) {
          res.status(500).json({msg:error})
      console.log(error)
     }
     }
     const deleteTask = async (req, res) => {
          try {
               const { id: taskID } = req.params
               const task = await Task.findOneAndDelete({ _id: taskID })
               
               if (!task)
               {
                    return res.status(404).json({msg:`no tasks found with that id`})     
               }
               res.status(200).json({task})
               console.log(task);
               
          } catch (error) {
               res.status(400).json({msg:error})
          }
     }
     const updateTask = async(req, res) => {
          try {
                const { id: taskID } = req.params
               const task = await Task.findOneAndUpdate({ _id: taskID },req.body,{new:true,runValidators:true,})
               
               if (!task)
               {
                    return res.status(404).json({msg:`no tasks found with that id`})     
               }
               res.status(200).json({task})
          } catch (error) {
                res.status(400).json({task})
          }
     }
module.exports = { getTask,getAllTasks,createTask,updateTask,deleteTask}   