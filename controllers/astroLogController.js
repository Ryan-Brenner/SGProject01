/************
 * DATABASE *
 ************/
var db = require('../models');

// GET /api/astroLogs
function index(req, res) {
  db.AstroLog.find({}, function(err,allAstroLogs){
   res.send(allAstroLogs); 
  });
};

function create(req, res) {
    console.log('body', req.body);

  db.AstroLog.create(req.body, function(err, astroLog) {
    if (err) { console.log('error', err); }
    console.log(astroLog);
    res.json(astroLog);
  });

}

function show(req, res) {
  db.AstroLog.findById(req.params.astroLogId, function(err, foundAstroLog) {
    if(err) { console.log('astroLogController.show error', err); }
    res.json(foundAstroLog);
  });
}


function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};






