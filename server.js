
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
res.json({error:"Title,description,created_by are required fields"})
}
  else{
  
  var newUser=new user;
    newUser.title=req.body.title;
    newUser.text=req.body.desc;
    newUser.created_by=req.body.creat;
    newUser.created_on=new Date();
    newUser.status_text=
  
  }
})



app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
