const TaskModel = require("../models/TaskModel")

module.exports.getTasks = async (req, res) => {
    // const task = await TaskModel.find()
    // res.send(tasks)
res.send("Hello from getTasks!")
}