$(document).ready(function() {
	
	$('a').tooltipster({
		arrow: true,
		content: $('<div style="width: 200px; height: 300px">Hi! What is up?<\/div>'),
		contentAsHTML: true,
		delay: 0,
		position: 'right',
		interactive: true,
		functionInit: function(origin, content) {
			// $(origin).attr('href')
			// return content;
		}
	});
	
});