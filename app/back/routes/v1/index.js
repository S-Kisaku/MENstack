var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).json('success');
});

router.get('/user', function(req, res, next){
  res.status(200).json('test');
});



module.exports = router;