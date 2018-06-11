// client-side js
// run by the browser each time your view template is loaded

(function(){
  console.log('hello world :o');
  var output=document.getElementById('output')
  // our default array of dreams
  const dreams = [
    'Find and count some sheep',
    'Climb a really tall mountain',
    'Wash the dishes'
  ];
  
  $.ajax({
      type:"GET",
    dataType: 'jsonp',
  url:"/all",
    success: function(data)
    {
    console.log('hello world :o');
    console.log(data);
    
    },
    error: function(err){
    console.log("hello");
    console.log(err.responseText
);
    }
  
  })
  
})()