const express = require('express');
const router = express.Router();
const { postController } = require('../controllers');
const { auth } = require('../utils');

// middleware that is specific to this router

router.get('/cleaned', postController.getCleaned);
router.post('/cleaned', auth(), postController.createCleaned);


module.exports = router