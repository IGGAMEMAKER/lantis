var express = require('express');
var router = express.Router();

function render(page) {
  return function(req, res) {
    res.render(page);
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/contacts', render('pages/contacts'));
router.get('/certificates', render('pages/certificates'));
router.get('/news/list', render('pages/newsList'));
router.get('/news', render('pages/news'));
router.get('/goodsCard', render('pages/goodsCard'));
// router.get('/contacts', render('contacts'));

module.exports = router;
