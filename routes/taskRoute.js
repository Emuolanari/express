const express = require('express');
const { getAllTasks } = require(`${__dirname}/../controllers/taskController`);

const router = express.Router();


router.route('/').get(getAllTasks);


module.exports = router;


