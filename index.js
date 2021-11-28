const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const fs = require('fs');
const path = require('path');
const taskRouter = require(`${__dirname}/routes/taskRoute`);
const morgan = require('morgan');

//const staticPage = fs.readFileSync(`${__dirname}/static/index.html`);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan.use('dev'));
}

const app = express();
app.use(express.json());

app.use('/api/v1/tasks', taskRouter);

module.exports = app;