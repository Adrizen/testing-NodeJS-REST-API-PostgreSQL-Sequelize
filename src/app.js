//import express, {json} from 'express';
//import morgan from 'morgan';
const express = require('express')
const json = require('express')
const morgan = require('morgan')

// Importing routes.
//import projectRoutes from './routes/projects'
//import taskRoutes from './routes/tasks'
const projectRoutes = require('./routes/projects')
const taskRoutes = require('./routes/tasks')

// initialization
const app = express();

// Middlewares.
app.use(morgan('dev')) // Show queries in a terminal.
app.use(json())        // Understand JSON files.

// routes.
app.use('/api/projects',projectRoutes)
app.use('/api/tasks',taskRoutes)

//export default app;
module.exports = app;