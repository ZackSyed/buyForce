var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/message', function(reg, res, next) {
  res.json('this is me reacting')
});

module.exports = router;
