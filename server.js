
var express = require('express');
var app = express();
var mongoose=require('mongoose')
var user=require('./models/user.js');
app.use(express.static('public'));
var bp=require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

mongoose.connect(process.env.MONG_URI,function(err){

  if(err){console.err}
  
console.log("connected to database");

});

app.post('/newproj',function(req,res,next){
if(req.body.title==''||req.body.desc==''||req.body.creat=='')
{
  console.log(req.body);
res.json({error:"Title,description,created_by are required fields"})
  
}
  else{
  
  var newUser=new user;
    
    newUser.id1=Math.round(Math.random()*1000000);
    newUser.title=req.body.title;
    newUser.text=req.body.desc;
    newUser.created_by=req.body.creat;
    newUser.created_on=new Date();
    newUser.status_text=req.body.stdesc;
    newUser.assigned_to=req.body.iss;
    if(req.body.status=='open'){newUser.open=true}
      else {newUser.open=false}
    
    newUser.save(function(err){
    if(err){
      console.log(err)
    }
    console.log(newUser);
      res.json(newUser)
    })
  }
})

app.get('/upproj',function(req,res,next){

if(req.query.id1==''){
res.json({error:"Pls enter a valid id"})
}
  
  else{
  var
  }
console.log(req.query);
  res.json({noope:1})
})

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
