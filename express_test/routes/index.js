var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const descripcion = "AnimeDAO is a free site to watch anime and you can even download subbed or dubbed anime in ultra HD quality without any registration or payment. By having only one ads in all kinds, we are trying to make it the safest site for free anime.";
  res.render('index', { title: req.app.locals.title, descripcion });
});

router.get('/images/:imageName', function(req, res) {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '../public/images', imageName);
  res.sendFile(imagePath);
});

module.exports = router;
