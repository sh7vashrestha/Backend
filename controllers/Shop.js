const Product = require('../modles/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('shop/product-list', {prods: products, 
        pageTitle:'All products',
        path: '/',
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {prods: products, 
            pageTitle:'Shop',
            path: '/',
    });
        });
};
exports.getCheckout = (req, res, next) => {
        res.render('shop/checkout', { 
            pageTitle:'Checkout',
            path: '/checkout',
            });
};
exports.getCart = (req, res, next) => {
        res.render('shop/cart', { 
            pageTitle:'Checkout',
            path: '/cart',
            });
};
exports.getOrders = (req, res, next) => {
        res.render('shop/orders', { 
            pageTitle:'Orders',
            path: '/orders',
            });
};

