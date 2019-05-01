const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');
const shopControllers = require('../controllers/shop');




router.get('/', shopControllers.getIndex);
router.get('/products', shopControllers.getProducts);
//il faut ajouter  :  pour recupere le id dans le lien ( id et pas statique)
router.get('/products/:productId', shopControllers.getProduct);
router.post('/cart', shopControllers.postCart);
router.get('/cart', shopControllers.getCart);
router.post('/cart-delete-item', shopControllers.postCartDeleteProduct);
router.get('/orders',shopControllers.getOrders);
router.get('/checkout',shopControllers.getChekout);

module.exports = router;