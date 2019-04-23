exports.get404Product =(req, res, next)=>{
    //res.status(404).send('<h1>Page Not found</h1>');
    //res.status(404).sendFile(path.join(__dirname,'Views','404.html'))
    res.status(404).render('404', {pageTitle: 'Not Found'});
};