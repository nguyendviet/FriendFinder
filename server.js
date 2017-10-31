var express = require('express');
var body = require('body-parser');
// var path = require('path');

var app = express();
// set 3000 as first choice port, if not available use any
var PORT = process.env.PORT || 3000;

// get function from htmlRoutes
var htmlRoute = require('./app/routing/htmlRoutes');
// get function from apiRoutes
var apiRoute = require('./app/routing/apiRoutes');

// convert data to json-like
app.use(body.urlencoded({extended: false}));
app.use(body.json());

htmlRoute(app);
apiRoute(app);

app.listen(PORT, () => {
    console.log('Listening on PORT: ' + PORT);
});