const express = require('express');

const path = require('path');
const router = express.Router();
const adminController = require('../controllers/admin')
// /admin/add-product => get
router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProduct); 
router.post('/add-product', adminController.postAddProduct); 


module.exports = router;



