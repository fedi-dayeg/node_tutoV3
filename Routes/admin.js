const express = require('express');
const path = require('path');
const router = express.Router();
const productControllers = require('../controllers/products');
const rootDir = require('../util/path');


// en peut doner les meme route =====> GET
router.get('/add-product',productControllers.getAddProduct);
// meme route car =====> POST
router.post('/add-product',productControllers.postAddProduct);

/*
exports.routes = router;
exports.product= product;*/
module.exports= router;