const  fs = require('fs');
const path = require('path');

//creation le fichier  JSON pour stoker notre cart
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
)

module.exports = class Cart {
    static addProduct(id, productPrice){
        //Fetch the previous cart
        fs.readFile(p,(err, fileContent)=>{
            let cart = {products: [], totalPrice: 0};
            if (!err){
                cart = JSON.parse(fileContent);
            }
            //Analyze th cart => Find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatetProduct;
            //Add new Product // incease quantity
            if (existingProduct){
                    updatetProduct = {...existingProduct};
                    updatetProduct.qty = updatetProduct.qty + 1;
                    cart.products = [...cart.products];
                    cart.products[existingProductIndex] = updatetProduct;
            }
            else {
                updatetProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatetProduct];
            }
            cart.totalPrice = cart.totalPrice + + productPrice
            fs.writeFile(p, JSON.stringify(cart), (err)=>{
                console.log(err);
            });
        });
    }


    static deleteProduct(id, productPrice){
        fs.readFile(p,(err, fileContent)=>{
           if(err){
               return;
           }
           const updatedCart = {...JSON.parse(fileContent)};
           const product = updatedCart.products.find(prod => prod.id === id);
           if(!product){
               return;
           }
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== prod);
           updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

            fs.writeFile(p, JSON.stringify(updatedCart), (err)=>{
               console.log(err);
            });

        });
    }

    //methode pour retourner  les produit dans cart
    static getCart(cb){
        //lire le fichier
        fs.readFile(p, (err, fileContent)=>{
            // get notre cart
            const cart = JSON.parse(fileContent);
            if(err){
                cb(null);
            }else
            {
                //retourner un cart avec ses valeur
                cb(cart);
            }

        });

    };
};
