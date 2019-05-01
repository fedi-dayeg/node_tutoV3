/*const fs =require('fs');
const path = require('path')*/;
const Cart = require('./cart');
const db = require('../util/database');

/*const p = path.join(path.dirname(process.mainModule.filename),'data','products.json ');*/
/*const getProductsFromFile = (cb)=>{

    fs.readFile(p, (err, fileContent)=>{
        if(err){
           return  cb([]);
        }else {
            cb(JSON.parse(fileContent));
        }
    });

};*/

// const products = [];

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;


    }


//methode pour inserer dans un fichier JSON
    /*save() {
        //products.push(this);
        //creation de la ficher json
        //const p = path.join(path.dirname(process.mainModule.filename),'data','products.json ');
            getProductsFromFile(products=>{
                if (this.id){
                    //modification de produit
                    //en va chercher le produit que a le id a modifier
                    const existedProductIndex = products.findIndex(prod =>prod.id === this.id);
                    const updatedProducts = [...products];
                    //je va le remplacer les nouveau produit avec le nouveau produit
                    updatedProducts[existedProductIndex] = this;
                    //en va ecrire le nouveau produit dans le fichier JSON
                    fs.writeFile(p, JSON.stringify(updatedProducts), (err)=>{
                        console.log(err);
                    });

                }else {
                    this.id = Math.random().toString();
                    products.push(this);
                   fs.writeFile(p, JSON.stringify(products), (err) => {
                        console.log(err);
                    });           }
            });
        //  fs.readFile(p, (err, fileContent)=>{})


    }*/


    //inserer dans DB mysql
    save(){
        return db.execute(
            'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
            [this.title, this.price, this.imageUrl, this.description]
        );
    }


    static deleteById(id) {
        /* getProductsFromFile(products=>{
             const product =products.find(prod =>prod.id === id);
             const updatedProcts = products.filter(prod => prod.id !== id);
             fs.writeFile(p,JSON.stringify(updatedProcts), err => {
                 if(!err){
                     Cart.deleteProduct(id, product.price);
                 }
             });
             /!*cb(product);*!/

         });*/


    };

   /* static fetchAll(cb) {
        // getProductsFromFile(cb);
    }*/


    static fetchAll() {
        return  db.execute('SELECT * FROM products');
    }


    //rechercher par id dans un fichier JSON
    /*static findById(id, cb) {
        /!*  getProductsFromFile(products=>{
              const product = products.find(p => p.id === id);
              cb(product);
          });
      };*!/

    };*/

    static findById(id) {
       return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);

    };

};