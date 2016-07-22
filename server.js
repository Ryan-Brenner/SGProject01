// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');



// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname+'/views'));

var controllers = require('./controllers');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.send('index');
});




/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
res.json({
    message: "Welcome to the Astropol api! Here's what you need to know!",
    documentation_url: "https://github.com/Ryan-Brenner/SGProject01_api/README.md", // CHANGE ME
    base_url: "http://astropol.herokuapp.com", // CHANGE ME
    endpoints: [
        { method: "GET", path: "/api", description: "Describes all available endpoints"},
        { method: "GET", path: "/api/home", description: "Homepage"},
        { method: "GET", path: "/api/logs", description: "Logs posted by users"},
        { method: "GET", path: "/api/events", description: "upcoming astronomy events"},
        { method: "POST", path: "/api/logs", description: "post a new log"},
        { method: "POST", path: "/api/pins", description: "Create a new stargazing location"},
        ]
    });
});
app.get('/home')
app.get('api/home')









/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
