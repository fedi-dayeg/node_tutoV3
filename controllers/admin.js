const Product = require('../models/product');

exports.getAddProduct = (req, res, next) =>{
    console.log('in other midlware');
    //res.send('<form action="/admin/add-product" method="post"><input type="text" name="product"> <button type="submit">AddProduct</button></form>');
    //res.sendFile(path.join(__dirname,'../','Views','add-product.html'));
    //res.sendFile(path.join(rootDir,'Views','add-product.html'));
    res.render('admin/edit-product',{pageTitle: 'Add Product', path: '/admin/add-product', editing: false});
};

exports.postAddProduct = (req, res, next)=> {
    console.log(req.body);
    //remplacer dans le models
    //product.push({title: req.body.title});
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price= req.body.price;
    const description = req.body.description;
    const product = new Product(null, title,imageUrl,description,price);
    product.save().then(()=>{
            res.redirect('/');
        }).catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) =>{
    console.log('in other midlware');
    // ===> en va chercher la page a editer si en le trouve pas en redirecter la index
    const editMode = req.query.edit;
    if (!editMode){
       return  res.redirect('/');
    }
    //res.send('<form action="/admin/add-product" method="post"><input type="text" name="product"> <button type="submit">AddProduct</button></form>');
    //res.sendFile(path.join(__dirname,'../','Views','add-product.html'));
    //res.sendFile(path.join(rootDir,'Views','add-product.html'));

    //===> en va recuperer le ID depuis le lien
    const prodId = req.params.productId;
    Product.findById(prodId, product=> {
        if(!product){
            return res.redirect('/');
        }
            res.render('admin/edit-product',{pageTitle: 'Edit Product', path: '/admin/edit-product', editing: editMode, product: product});
    });

};

exports.postEditProduct = (req, res, next)=>{
    //en recuperer le id depuit le name dans input hidden
    //en req.body car c'est un post
    const prodId = req.body.productId;
    //en recupere tout les element du form
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const updatedProduct = new Product(prodId, updatedTitle,updatedImageUrl,updatedDesc, updatedPrice);
    updatedProduct.save();
    res.redirect('/admin/products');
};


exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products =>{
    res.render('admin/products',{ prods:products,pageTitle:'Products', path:'/admin/products'});
    });
};

exports.postDeleteProduct = (req, res, next) =>{
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};