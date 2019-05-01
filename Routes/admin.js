const express = require('express');
const path = require('path');
const router = express.Router();
const adminController = require('../controllers/admin');
const rootDir = require('../util/path');


// en peut doner les meme route =====> GET
router.get('/add-product',adminController.getAddProduct);
// meme route car =====> POST
router.post('/add-product',adminController.postAddProduct);
router.get ('/edit-product/:productId', adminController.getEditProduct);
//  /admin/products =>Get
router.get('/products', adminController.getProducts);
router.post('/edit-product', adminController.postEditProduct);
//route pour supprimer un product
router.post('/delete-product',adminController.postDeleteProduct);

/*
exports.routes = router;
exports.product= product;*/
module.exports= router;