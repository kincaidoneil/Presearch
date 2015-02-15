$(document).ready(function() {
	
	console.log('jQuery loaded in the injected code.');
	
	$('body').css('position', 'relative');
	
	$('a').tooltipster({
		arrow: true,
		content: $('<div style="width: 200px; height: 300px">Hi! What is up?<\/div>'),
		contentAsHTML: true,
		delay: 0,
		position: 'right',
		interactive: true,
		functionInit: function(origin, continueTooltip) {
			console.log(
				$(origin).attr('href')
			);
			continueTooltip();
		}
	});
	
});