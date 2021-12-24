const express = require('express');
const { getAllTasks, createTask } = require(`${__dirname}/../controllers/taskController`);

const router = express.Router();


router.route('/').get(getAllTasks).post(createTask);


module.exports = router;


