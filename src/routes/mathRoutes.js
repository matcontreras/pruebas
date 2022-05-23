const express = require('express');
const router = express.Router(); 
const mathController = require('./../controllers/mathController');

router.get('/add/:num1/:num2', mathController.add);
router.get('/substract', mathController.substract);
router.post('/multiply', mathController.multiply);
router.post('/divide', mathController.divide);

module.exports = router; 