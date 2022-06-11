const path = require('path');
const http = require('http');

const bodyParser = require('body-parser');
const express = require('express');

const errorController = require('./controllers/error');

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

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(errorController.getErrors);
app.listen(5000);
