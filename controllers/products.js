const product = [];

exports.getAddProduct = (req, res, next) =>{
    console.log('in other midlware');
    //res.send('<form action="/admin/add-product" method="post"><input type="text" name="product"> <button type="submit">AddProduct</button></form>');
    //res.sendFile(path.join(__dirname,'../','Views','add-product.html'));
    //res.sendFile(path.join(rootDir,'Views','add-product.html'));
    res.render('add-product',{pageTitle: 'Add Product', path: '/admin/add-product'});
};

exports.postAddProduct = (req, res, next)=> {
    console.log(req.body);
    product.push({title: req.body.title});
    res.redirect('/');
};

exports.getProducts= (req, res, next) =>{
    console.log('in other midlware');
    //console.log(adminData.product);
    //res.send('<h1>Hello From Express </h1>');
    //res.sendFile(path.join(__dirname,'..','Views', 'shop.html'));
    //render le html page
    //res.sendFile(path.join(rootDir,'Views', 'shop.html'));
    //render le page shop de pug engine template
    //verifier les variable de handlebars
    //const product = adminData.product;
    res.render('shop',{prods: product,pageTitle: 'Shop', path: '/', hasProducts: product.length >0, activeShop: true, productCSS:true, layout: false });
};