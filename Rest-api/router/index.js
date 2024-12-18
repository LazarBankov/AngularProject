const router = require('express').Router();
const users = require('./users');
const posts = require('./posts');
const cleaned = require('./cleaned')
const attends = require('./attends');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/posts', posts);
router.use('/posts', attends);
router.use('/posts', cleaned)
router.get('/posts/:postId', posts);
router.delete('/posts/:postId', posts);
router.put('/posts/:postId', posts);

module.exports = router;
