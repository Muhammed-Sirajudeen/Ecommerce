var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit',(req,res)=>{
  let username=req.body.username
  let password=req.body.password
  if(username==='vava'){
    res.render('user')
  }
});

module.exports = router;
