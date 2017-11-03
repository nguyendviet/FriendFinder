var express = require('express');
var body = require('body-parser');

var app = express();
// set 3000 as first choice port, if not available use any
var PORT = process.env.PORT || 3000;

// get function from htmlRoutes
var htmlRoute = require('./app/routing/htmlRoutes');
// get function from apiRoutes
var apiRoute = require('./app/routing/apiRoutes');

// get html and api handlers
var htmlHandler= require('./app/routing/apiRoutes');
var apiHandler = require('./app/routing/htmlRoutes');

app.use(body.urlencoded({extended: true}));
app.use(body.json());

htmlHandler(app);
apiHandler(app);

app.listen(PORT, () => {
    console.log('Listening on PORT: ' + PORT);
});