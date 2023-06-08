const Task = require('../models/task');


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error })};
}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error })};
    
}

const getTask = async (req, res) => {
    try {
        const singleTask = await Task.findOne({ _id: req.params.id });
        res.status(201).json({ singleTask });q
    } catch (error) {
        res.status(500).json({ msg: 'No Task with that ID' });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id:taskID } = req.params;
        const updateTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {new: true, runValidators: true});
        res.status(201).json({ updateTask });
        
    } catch (error) {
        res.status(500).json({ msg: 'No Task with that ID' });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id:taskID } = req.params;
        const deleteTask = await Task.findOneAndDelete({ _id:taskID });
        res.status(201).json({ deleteTask });
    } catch (error) {
        res.status(500).json({ msg: 'No Task with that ID' });
    }
    res.status(200).json({ tasks }); // Shows the tasks to confirm the ID
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}