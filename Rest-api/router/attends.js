const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { postController } = require('../controllers');

// middleware that is specific to this router

router.put('/:postId/attend', auth(), postController.attend);

module.exports = router
