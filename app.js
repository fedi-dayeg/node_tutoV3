const http =require('http');
//const routes = require('./routes');
const express  = require('express');
const bobyParser = require('body-parser');
const app = express();
const  adminRoutes = require('./Routes/admin');
const  shopRouter = require('./Routes/shop');
const path = require('path');
const errorController = require('./controllers/error');
const db = require('./util/database');
//importer handlebars
//const expressHbs = require('express-handlebars');


/*db.execute('SELECT * FROM products').then(result =>{
    console.log(result);
}).catch(err => {
    console.log(err)
});*/

//ajouter un engine pour handlebars
//en peut changer le nom handlebars tout se que en veut mais il faut aussi changer le format de extension html
//layoutDir permet de ajouter un layout
   // app.engine('handlebars',expressHbs({layoutsDir: 'Views/layout/', defaultLayout: 'main-layout', extname: 'handlebars'}));
//ajouter le handlebars
app.set('view engine', 'ejs');

//set globale configuaration value
//ajouter la pug engine template
//app.set('view engine', 'pug');
app.set('Views','Views');


/*app.use((req, res, next) =>{
    console.log('in midlware');
    next(); //autoriser le request de passer le prochaine use (midlware)
});*/
app.use(bobyParser.urlencoded({extends: false}));
app.use('/admin',adminRoutes);
app.use(shopRouter);
//permet de lire le dossier public pour le css
app.use(express.static(path.join(__dirname,'public')));

app.use(errorController.get404Product);

app.listen(3000);
//const server = http.createServer(app);
   // console.log(req.url, req.method, req.headers);
   /* const url= req.url;
    const method = req.method ;*/


    //process.exit();

//server.listen(3000);

