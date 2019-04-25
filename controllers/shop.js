//const product = [];
const Product = require('../models/product');


exports.getProducts= (req, res, next) =>{
   Product.fetchAll((products)=>{
       res.render('shop/product-list',{prods: products,pageTitle: 'All products', path: '/products'
       });
   });
    console.log('in other midlware');
    //console.log(adminData.product);
    //res.send('<h1>Hello From Express </h1>');
    //res.sendFile(path.join(__dirname,'..','Views', 'shop.html'));
    //render le html page
    //res.sendFile(path.join(rootDir,'Views', 'shop.html'));
    //render le page shop de pug engine template
    //verifier les variable de handlebars
    //const product = adminData.product;
    //res.render('shop',{prods: product,pageTitle: 'Shop', path: '/', hasProducts: product.length >0, activeShop: true, productCSS:true, layout: false });
};
exports.getIndex= (req, res, next) => {
    Product.fetchAll((products)=> {
        res.render('shop/index', {
            prods: products, pageTitle: 'shop', path: '/'
        });
    });
};

exports.getCart = (req, res, next) =>{
    product.fetchAll((product)=>{
        res.render('shop/cart',{pageTitle: 'Your Cart', path: '/cart'})
    });
};

exports.getChekout = (req,res,next) =>{
    res.render('chop/chekout', {pageTitle: 'Chekout',path:'/chekout'})
};