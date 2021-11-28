const path = require('path');
const Tasks = require(`${__dirname}/../models/taskModel.js`);

console.log(path.dirname);

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find();

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