var express = require('express');
var router = express.Router();

<<<<<<< HEAD
router.get('/', function(req, res) {
  res.render('chat', {user: req.session.user, title: 'Chat'});
=======
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Chat' });
>>>>>>> 772df81b72b8c76b18dc47e7df9d3079b2a8b7f7
});

module.exports = router;