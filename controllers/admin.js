const Product = require('../models/product');

exports.getAddProduct = (req, res, next) =>{
    console.log('in other midlware');
    //res.send('<form action="/admin/add-product" method="post"><input type="text" name="product"> <button type="submit">AddProduct</button></form>');
    //res.sendFile(path.join(__dirname,'../','Views','add-product.html'));
    //res.sendFile(path.join(rootDir,'Views','add-product.html'));
    res.render('admin/add-product',{pageTitle: 'Add Product', path: '/admin/add-product'});
};

exports.postAddProduct = (req, res, next)=> {
    console.log(req.body);
    //remplacer dans le models
    //product.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next)=>{
    product.fetchAll(product =>{
    res.render('/admin/products',{ prods:product,pageTitle:'Products', path:'/admin/products'});
    });
};