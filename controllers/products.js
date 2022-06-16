const Product = require('../modles/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {pageTitle: "Add-Product",
    path: '/admin/add-product',
    formsCSS:true,
    productCSS:true,
    activeAddProduct: true}
    )};

exports.postAddProduct =(req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('shop/product-list', {prods: products, 
        pageTitle:'Shop',
        path: '/',
        hasProducts: products.length>0,
        activeShop: true,  
        productCSS:true });
    });
};
exports.editProduct = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('admin/edit-product', { 
        pageTitle:'Add-Product',
        path: '/admin/edit-product',
        formsCSS:true,
         productCSS:true,
        activeEditProduct: true});
    });
};
exports.adminProduct = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('admin/products', { 
        pageTitle:'Add-Product',
        path: '/admin/products',
        formsCSS:true,
         productCSS:true,
        activeAdminProduct: true});
    });
};
exports.Product = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('admin/products', { 
        pageTitle:'Add-Product',
        path: '/admin/products',
        formsCSS:true,
         productCSS:true,
        activeEditProduct: true});
    });
};

