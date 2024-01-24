var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('chat', {user: req.session.user.username, title: req.app.locals.title, section: 'Chat'});
});



module.exports = router;