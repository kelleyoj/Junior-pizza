var express = require('express');
var router = express.Router();

/* menu page. */
router.get('/', function(req, res, next) {
  res.render('menu');
});

module.exports = router;