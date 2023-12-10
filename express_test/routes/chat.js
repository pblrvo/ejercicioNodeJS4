const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('chat', { title: 'Express' });
});

module.exports = router;