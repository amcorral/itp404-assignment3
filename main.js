

// function getSubreddits(){
// 	var subReddit = document.getElementById('redditName').value;

// 	$.ajax({
// 		url: encodeURI('https://www.reddit.com/r/' + subReddit + '.json'),
// 		type: 'get',
// 		success: function(response){
// 			var templateSource = $('#redditTemplate').html();
// 			var template = Handlebars.compile(templateSource);
// 			var html = template(response);

// 			$('#emptyDiv').html(html);
// 		}
// 	});


// }


function getSubreddits() {
  var subReddit = document.getElementById('redditName').value;
  var promise = $.ajax({
    url: encodeURI('https://www.reddit.com/r/' + subReddit + '.json'),
    type: 'get'
  });

 //return response.data.children;
  

  promise.then(function(response) {
  console.log(response);
  var templateSource = $('#redditTemplate').html();
  var template = Handlebars.compile(templateSource);
  var d = {
  	info : response.data.children
  }
  var html = template(d);
  $('#emptyDiv').html(html);
}, function() {
  console.log('there was an error');
});
}








// function getSubreddits(){
// 	var subReddit = document.getElementById('redditName').value;
// 	$.ajax({
// 		url: 'https://www.reddit.com/r/' + subReddit + '.json',
// 		type: 'get'
// 		success: function(response){
// 			var templateSource = $('#redditTemplate').html();
// 			var template = Handlebars.compile(templateSource);
// 			var html = template({
// 				data: data.children
// 			});

// 			$('#emptyDiv').html(html);
// 		}
// 	});


// }