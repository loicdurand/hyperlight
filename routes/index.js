var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/qsa', function(req, res, next) {
  res.render('index-querySelAll', { title: 'Express' });
});

module.exports = router;
