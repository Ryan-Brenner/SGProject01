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


app.get('/api', controllers.api.index);
app.get('/astrologs', controllers.astroLogs.index);
//app.get('/home', controllers.home.show);
// app.get('/api/albums/:albumId', controllers.albums.show);
// app.post('/api/albums', controllers.albums.create);
// app.post('/api/albums/:albumId/songs', controllers.albumsSongs.create);









app.get('api/AstroLogs', function(req,res){
    //books here
        db.Log.find({}, function(err,astroLogs){
            if(err) {
                res.send(err);
            }else if(astrologs) {
                res.send(astrologs);
            }
        });
});




app.post('/logs', function(req,res){
    //add books
        db.Book.insert(newBook)

})








/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
