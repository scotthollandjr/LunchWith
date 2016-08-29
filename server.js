"use strict";

let express = require('express'),
    compression = require('compression'),
    products = require('./server/products'),
    app = express();

app.set('port', process.env.PORT || 3000);

app.use(compression());

app.use('/', express.static(__dirname + '/www'));
app.use('/account', express.static(__dirname + '/www'));
app.use('/main', express.static(__dirname + '/www'));
app.use('/css', express.static(__dirname + '/node_modules/bulma/css'));
app.use('/account', express.static(__dirname + '/www'));


// Adding CORS support
app.all('*', function (req, res, next) {
    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        next();
    }
});

app.use('/products', products.findAll);
app.use('/products/:id', products.findById);
app.use('/postTest', products.newUser);
app.use('/newUser', express.static(__dirname + '/www'));

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
