const Router = require('express');
const router = Router();

const authController = require('../controllers/auth.controller')

// Login.
router.post('/signin', authController.signIn);

// Register.
router.post('/signup', authController.signUp);

module.exports = router;