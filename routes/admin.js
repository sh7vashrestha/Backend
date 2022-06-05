const express = require('express');

const path = require('path');
const router = express.Router();

const routedir =require('../util/path');

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(routedir,  'htmls','add-product.html'));
});


router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
