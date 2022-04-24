const Router = require('express');
const router = Router();

const postController = require('../controllers/post.controller');
const auth = require('../../middlewares/auth')

router.get('/', auth, postController.index);
router.get('/:id', auth, postController.show);
router.patch('/:id', auth, postController.update);
router.delete('/:id', auth, postController.deletePost);


module.exports = router;

