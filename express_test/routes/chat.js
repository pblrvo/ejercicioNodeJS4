var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('chat', {user: req.session.user, title: 'Chat'});
});

module.exports = router;