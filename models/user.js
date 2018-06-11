var mongoose=require('mongoose');

var userScheme=mongoose.Schema({

  title:String,
  text:String,
  created_on:Date,
  updated_on:Date,
  created_by:String,
  assigned_to:String,
  open:Boolean,
  status_text:String



})


module.exports=mongoose.model('userl',userScheme);