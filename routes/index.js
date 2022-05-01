var express = require('express');
var router = express.Router();
var con=require('./Database/database')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post('/submit',(req,res)=>{
  let username=req.body.username
  let password=req.body.password
  if(username==='vava'){
    res.render('index',{login:true,user:false})
    con.FetchFromdb()
  }else{
    res.render('index',{login:true})
  }
});

module.exports = router;
