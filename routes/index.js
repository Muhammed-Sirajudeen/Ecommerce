var express = require('express');
var router = express.Router();
var con=require('./Database/database')


/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user
  console.log(user)
  if(user){
    data={name:"siraju"}
  res.render('index',{login:true,user:true,data});
  }else{
    
    res.render('login')
  }

});
router.post('/submit-login',async function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    identifier={"name":username}
    con.fetchData('Ecommerce','Authentication',identifier).then((data)=>{
      
      console.log(data)
      if(data){
        var password_authentication=data.password

      }else{
        password_authentication=null;
      }
      if(password==password_authentication){
        var auth=true;
      }else{
        var auth=null;
      }
      if (auth){
        console.log("hey")
        con.fetchDataProducts('Ecommerce','Products').then((data)=>{
          res.render('index',{user:true,login:true,data})
          req.session.loggedIn=true
          var m=123
          req.session.user=m
        })
        
        
      }else{
        console.log("hello")
        res.render('login',{err1:true})
      }

    })



  });

router.get('/CreateAccount', function(req, res, next) {
  res.render('CreateAccount');
});
router.post('/submit-logout',(req,res,next)=>{
  let username_create=req.body.username
  let password_create=req.body.password
  console.log(username_create)
  console.log(password_create)
  database_obj={"name":username_create,"password":password_create}
  con.InsertdataDatabase('Ecommerce','Authentication',database_obj).then((data)=>{
    console.log(data)
})

  res.render('login')
});

router.get('/cart', function(req, res, next) {
  if(req.session.loggedIn){
    res.render('cart')
  }else{
    res.render('login')
  }

  
});
router.get('/Addtocart', function(req, res, next) {

  res.render('login');
});

router.get('/signout',(req,res)=>{
  req.session.destroy()
  res.render('login')
})


module.exports = router;
