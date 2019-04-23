const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');
const productControllers = require('../controllers/products');




router.get('/',productControllers.getProducts);


module.exports = router;