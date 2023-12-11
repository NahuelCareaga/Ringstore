const express = require('express');

const router = express.Router();

const controller = require('../controllers/indexController');

router.get('/', controller.index );

router.get('/nosotros/', controller.nosotros );

router.get('/products/', controller.products );

module.exports = router;