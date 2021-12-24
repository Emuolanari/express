const path = require('path');
const Task = require(`${__dirname}/../models/taskModel.js`);

console.log(path.dirname);

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json({
            status: 'success',
            data: {
                tasks
            }
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

exports.createTask = async (req, res) => {
    try {
        const newTask = await Task.create(Tareq.body);
        res.status(201).json({
            'status': 'success',
            'message': ' task added successfully'
        })
    }
    catch (error) {
        res.status(409).json({
            'status': 'fail',
            'message': error
        })
    }
}