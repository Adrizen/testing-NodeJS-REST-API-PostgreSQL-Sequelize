//import { Router } from 'express';
const Router = require('express');
const router = Router();

const createProject = require('../controllers/project.controller')

router.post('/', createProject);

//export default router;
module.exports = router;