const path = require('path');
const http = require('http');

const bodyParser = require('body-parser');
const express = require('express');


const app = express();
//For Handle bars
// const hbs  = require('express-handlebars');
// app.engine('handlebars', hbs({extname:'hbs', defaultLayout:'layout', layoutsDir:__dirname + '/htmls'}));
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname,'htmls'));

//For PUG
// app.set('view engine', 'pug');
// app.set('views', 'htmls');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:"404: Page not found"});
});
app.listen(5000);
