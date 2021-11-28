const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a task must have a name']
    },
    description: {
        type: String,
        required: [true, 'Task description cannont be empty']
    }
})


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;