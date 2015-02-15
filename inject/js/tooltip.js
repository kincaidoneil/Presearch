$(document).ready(function() {
	
	$('a').tooltipster({
		arrow: true,
		content: $('<div style="width: 200px; height: 300px">Hi! What is up?<\/div>'),
		contentAsHTML: true,
		delay: 250,
		position: 'right',
		interactive: true,
		interactiveTolerance: 150;
		functionInit: function(origin, content) {
			content= $(origin).attr('href')
			return content;
		}
	});
	
});
