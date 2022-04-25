const Router = require('express');
const router = Router();

const postController = require('../controllers/post.controller');
const auth = require('../../middlewares/auth')

// Policies.
const postPolicies = require('../../policies/PostPolicy');

router.get('/', auth, postController.index);
router.get('/:id', auth, postController.find, postPolicies.show, postController.show);
router.patch('/:id', auth, postController.find, postPolicies.update, postController.update);
router.delete('/:id', auth, postController.find, postPolicies.deletePost, postController.deletePost);


module.exports = router;

