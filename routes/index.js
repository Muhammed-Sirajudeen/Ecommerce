var express = require('express');
var router = express.Router();
var con=require('./Database/database')
var id=1;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/submit-login',async function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    var name={"name":username}

    con.FetchFromdb(function hey(docs) {
        console.log(docs)
        res.render('index',{user:true,login:true})
   
        

    },name)


  });

router.get('/CreateAccount', function(req, res, next) {
  res.render('CreateAccount');
});
router.post('/submit-logout',(req,res,next)=>{
  let username_create=req.body.username
  let password_create=req.body.password
  console.log(username_create)
  console.log(password_create)
  if (username_create!=" "){
    console.log("\n success\n")
  }else{
    print("the entered value is null")
  }
  res.render('login')
});


module.exports = router;
