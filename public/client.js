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
    dataType: 'json',
  url:"/all",
    success: function(data)
    {
    console.log('hello world :o');
    console.log(data);
    var issues= [];
            data.forEach(function(ele) {
              console.log(ele);
              var openstatus;
              (ele.open) ? openstatus = 'open' : openstatus = 'closed';
              var single = [
                '<div class="issue '+openstatus+'">',
                '<p class="id">id: '+ele.id1+'</p>',
                '<h3>'+ele.title+' -  ('+openstatus+')</h3>',
                '<br>',
                '<p>'+ele.text+'</p>',
                '<p>'+ele.status_text+'</p>',
                '<br>',
                '<p class="id"><b>Created by:</b> '+ele.created_by+'  <b>Assigned to:</b> '+ele.assigned_to,
                '<p class="id"><b>Created on:</b> '+ele.created_on+'  <b>Last updated:</b> '+ele.updated_on,
                '<br><a href="#" class="closeIssue" id="'+ele._id+'">close?</a> <a href="#" class="deleteIssue" id="'+ele._id+'">delete?</a>',
                '</div>'
                
              ];
              issues.push(single.join(''));
            });
          $('#output').html(issues.join(''));
    },
    error: function(err){
    console.log("hello");
      console.log(typeof(err.responseText))
    console.log(err.responseText);
    }
  
  })
  
})()