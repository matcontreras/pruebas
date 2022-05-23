const express = require('express');
const router = express.Router(); 
const mainController = require('./../controllers/mainController');
const mathRouter = require('./mathRoutes');
const postRouter = require('./postRoutes');
const stockRouter = require('./stockRoutes');

router.get('/', mainController.index);
router.use('/math', mathRouter);
router.use('/posts', postRouter);
router.use('/stocks', stockRouter);
router.get('/*', mainController.notFound);

module.exports = router; 