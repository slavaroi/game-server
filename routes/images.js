var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/mysite');

router.get('/', function(req, res) {
    var collection = db.get('images');
    collection.find({}, function(err, images){
        if (err) throw err;
      	res.json(images);
    });
});

module.exports = router;
