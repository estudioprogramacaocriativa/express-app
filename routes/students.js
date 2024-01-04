var express = require('express');
var router = express.Router();

/* GET students listing. */
router.get('/', function(req, res, next) {
  res.render('alunos', { title: 'Alunos' });
});

module.exports = router;
