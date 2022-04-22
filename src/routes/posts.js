const Router = require('express');
const router = Router();

const postController = require('../controllers/post.controller');
const auth = require('../../middlewares/auth')

router.get('/', auth, postController.index);

module.exports = router;