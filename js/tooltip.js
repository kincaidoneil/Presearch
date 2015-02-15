$(document).ready(function() {
	
	var data = {};
	
	$('a').tooltipster({
		arrow: true,
		contentAsHTML: true,
		delay: 250, // Set ms before tooltip is displayed.
		position: 'right',
		interactive: true,
		interactiveTolerance: 150, // Set ms before fade out after no activity.
		theme: 'tooltipster-shadow',
		functionInit: function(origin, content) {
			// Create template for tooltip.
			var template = '<div class="tooltip">\
				<h2>{{title}}<\/h2>\
				<a href="{{url}}">\
					<h4>Visit Page<\/h4>\
				<\/a>\
				<a id="addButton">\
					<h4>Add to List<\/h4>\
				<\/a>\
			<\/div>';
			// Set live data-bindings.
			data = {
				title: 'Hello world!',
				url: $(origin).attr('href')
			};
			// Set content of tooltip.
			return Mustache.render(template, data);
		}
	});
	
	// *** NOT QUITE WORKING
	
	$('#addButton').on('click', function(event) {
		console.log('hello');
		chrome.runtime.sendMessage({addLink: data}, function(response) {
			// I don't really know what to do here
		});
	});
	
});