
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

app.get



app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
