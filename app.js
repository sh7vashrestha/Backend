const path = require('path');
const http = require('http');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'htmls');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'htmls', '404.html'));
});
app.listen(5000);
