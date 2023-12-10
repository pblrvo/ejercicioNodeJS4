var express = require('express');
var router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {user: req.session.user,  title: 'Login' });
});

router.post('/', async (req, res) => {
  const username = req.body.username;
  const user = await sequelize.models.user.findOne({where: {username}});
  if(user){
    bcrypt.compare(req.body.password, user.password, function(err, result){
      if (result){//Login y pass correcto
        req.session.user = {username: user.username};
        req.session.message = "¡Login correcto!"
        res.redirect("/chat");
      } else {
        req.session.error = "Incorrect username or password.";
        res.redirect("/chat");
      }
    });
  } else {
    req.session.error = "Incorrect username or password.";
    res.redirect("login");
  }
});

module.exports = router;
