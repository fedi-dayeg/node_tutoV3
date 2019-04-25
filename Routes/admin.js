const express = require('express');
const path = require('path');
const router = express.Router();
const adminController = require('../controllers/admin');
const rootDir = require('../util/path');


// en peut doner les meme route =====> GET
router.get('/add-product',adminController.getAddProduct);
// meme route car =====> POST
router.post('/add-product',adminController.postAddProduct);
//  /admin/products =>Get
router.get('/products', adminController.getProducts);

/*
exports.routes = router;
exports.product= product;*/
module.exports= router;