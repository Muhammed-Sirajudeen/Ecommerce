var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin');
});

module.exports = router;

router.post('/adminlogin', function(req, res, next) {
  console.log(req.body.username)
  console.log(req.body.password)
  

  
  res.render('index',{admin:true,login:true});
});


