var express = require('express');
var router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', {user: req.session.user, title: 'Register'});
});

router.post('/', async (req, res) => {
    const username = req.body.username;
    const pass = req.body.password;
    const user = await sequelize.models.user.findOne({where: {username}});
    if(!user){
      const password = await bcrypt.hash(pass, 10);
      const newUser = await sequelize.models.user.create({username, password});
      req.session.user = {username: user};
      req.session.message = "Registro correcto!"
      res.redirect("/chat");
    } else {
      req.session.error = "Ya existe ese username";
      res.redirect("/register");
    }
  });

module.exports = router;
