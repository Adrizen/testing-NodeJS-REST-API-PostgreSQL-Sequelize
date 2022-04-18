//import { Router } from 'express';
const Router = require('express');
const router = Router();

const taskController = require('../controllers/task.controller')

// /api/task/
router.post('/', taskController.createTask);    // Create a new task via POST.
router.get('/', taskController.getTasks)          // Get all tasks in the DB.

// /api/task/:taskID
router.delete('/:taskID', taskController.deleteTask);    // Delete one task given a taskID.

// /api/task/project/:projectId
router.get('project/:projectid', taskController.getTasksByProject); // Get all the tasks of a project given his ProjectId.

//export default router;
module.exports = router;