
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
    newUser.open=req.body.status;
  
    
    newUser.save(function(err){
    if(err){
      console.log(err)
    }
    //console.log(newUser);
      res.json(newUser)
    })
  }
})

app.get('/upproj',function(req,res,next){

if(req.query.id1==''){
res.json({error:"Pls enter a valid id"})
}
  
  else{
  var obj=req.query;
    for(var ele in obj){if(obj[ele]==''){delete obj[ele]}}
    obj.id1=Number(obj.id1);
    console.log(obj);

    obj["updated_on"]=new Date();
    user.findOne({ id1:req.query.id1}, function (err, doc){
  if(doc!=null){
  
    user.update({id1:req.query.id1},{$set:obj},function(err,doccount){
      
      if(err){console.log(err);}
      console.log(doccount)
    res.json({success:"updated"});
    
    })
  
  }
      else{
      res.json({error:"id not valid"})
      }
});
    }

  
})

app.get('/getproj',function(req,res,next){

  user.find()

})

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
