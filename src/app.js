const express = require('express')
const json = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// Importing routes.
const projectRoutes = require('./routes/projects')
const taskRoutes = require('./routes/tasks')
const userRoutes = require('./routes/users')

// initialization
const app = express();

// Middlewares.
app.use(morgan('dev')) // Show queries in a terminal.
app.use(json())        // Understand JSON files.
const jsonParser = bodyParser.json()

// routes.
app.use('/api/projects', jsonParser, projectRoutes);
app.use('/api/tasks', jsonParser, taskRoutes);
app.use('/api/users', jsonParser, userRoutes);

//export default app;
module.exports = app;