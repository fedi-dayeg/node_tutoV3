//const product = [];
const Product = require('../models/product');
const Cart = require('../models/cart');



// cette fonction permet de stoker dans fichier JSON
/*exports.getProducts= (req, res, next) =>{
   Product.fetchAll((products)=>{

       res.render('shop/product-list',{prods: products, pageTitle: 'All products', path: '/products'
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
};*/


exports.getProducts= (req, res, next) =>{
   Product.fetchAll().then(([rows, fieldData])=>{
       res.render('shop/product-list',{prods: rows, pageTitle: 'All products', path: '/products'});
   })
       .catch(err => console.log(err));



   };



//rechercher produit dans un fichier JSON
//recupere le ID dans le lien
/*exports.getProduct = (req, res, next) => {
    const prodID = req.params.productId;
    //console.log(prodID);
    Product.findById(prodID, product =>{
        console.log(product);
        res.render('shop/product-detail', {product: product, pageTitle: product.title, path: '/products'});
    });

};*/

//afficher un seul produit dans base de donné SQL
exports.getProduct = (req, res, next) => {
    const prodID = req.params.productId;
    Product.findById(prodID).then(([product])=>{
        //console.log(product);
        //il faut passer un seul element dans dans un tableau [0}
        res.render('shop/product-detail', {product: product[0], pageTitle: product.title, path: '/products'});
    }).catch(err => console.log(err));

};

//cette fonction utiliser pour stokage au fichier JSON
/*
exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};
*/

exports.getIndex = (req, res, next) => {
    Product.fetchAll()
        .then(([rows, fieldData])=> {
            console.log(rows);
            res.render('shop/index', {
                prods: rows,
                pageTitle: 'Shop',
                path: '/'
            });
        })
        .catch(err => console.log(err));

};


exports.getCart = (req, res, next) =>{
        Cart.getCart(cart =>{
            //recuperer le product model pour fetch all product
            Product.fetchAll(products =>{
                const cartProduct = [];
                for (product of products){
                    const cartProductData = cart.products.find(prod => prod.id === product.id);
                    if(cartProductData){
                        cartProduct.push({productData: product, qty: cartProductData.qty});
                    }
                }
                res.render('shop/cart',{pageTitle: 'Your Cart', path: '/cart', product: cartProduct});
            });

        })

};

exports.postCart = (req, res, next) =>{
  const prodId = req.body.productId;
  //console.log(prodId);
    Product.findById(prodId,(product)=>{
        Cart.addProduct(prodId, product.price);
    });
  res.redirect('/cart');
};


// suuprimer un product dans notre cart
exports.postCartDeleteProduct = (req, res, next) =>{
  const prodId = req.body.productId;
  Product.deleteById(prodId, product =>{
      Cart.deleteProduct(prodId, product.price);
      res.redirect('/cart');
  });

};
exports.getOrders = (req, res, next) =>{
    res.render('shop/orders', {pageTitle: 'Your Orders', path: '/orders'})
};

exports.getChekout = (req,res,next) =>{
    res.render('shop/checkout', {pageTitle: 'checkout',path:'/checkout'})
};

