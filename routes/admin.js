const express = require('express');

const path = require('path');
const router = express.Router();

const routedir =require('../util/path');
const products = [];
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(routedir,  'htmls','add-product.html'));
});


router.post('/product',(req, res, next) => {
    products.push({ title : req.body.title });
    res.redirect('/');
});

exports.routes =router;
exports.products=products;
