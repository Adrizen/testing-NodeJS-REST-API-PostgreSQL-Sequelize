const Router = require('express');
const router = Router();

const projectController = require('../controllers/project.controller')

// /api/projects/
router.post('/', projectController.createProject);    // Create a new project via POST.
router.get('/', projectController.getProjects);       // Get all the project in the DB.

// /api/projects/:projectID
router.get('/:projectID', projectController.getOneProject);         // Get only one project given a projectID.
router.delete('/:projectID', projectController.deleteOneProject);   // Delete one project given a projectID.
router.put('/:projectID', projectController.updateProject);         // Update projects given a projectID.

module.exports = router;