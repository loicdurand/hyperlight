var express = require('express');
var router = express.Router();

const params = {
  title: 'Hyperlight'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {...params});
});

router.get('/qsa', function(req, res, next) {
  res.render('index-querySelAll', {...params});
});

module.exports = router;
