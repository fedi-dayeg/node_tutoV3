const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');
const shopControllers = require('../controllers/shop');




router.get('/', shopControllers.getIndex);
router.get('/products', shopControllers.getProducts);
router.get('/cart', shopControllers.getCart);
router.get('/checkout',shopControllers.getChekout       );

module.exports = router;