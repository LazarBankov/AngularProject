const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', postController.getLatestsPosts);
router.get('/posts/:postId', postController.getSinglePost);
router.post('/', auth(), postController.createPost);
router.delete('/posts/:postId', postController.deletePost);

module.exports = router