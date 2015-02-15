$(document).ready(function() {
	
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
				<h2>[Insert title]<\/h2>\
				<a href="{{url}}">\
					<h4>Visit Page<\/h4>\
				<\/a>\
				<a>\
					<h4>Add to List<\/h4>\
				<\/a>\
			<\/div>';
			// Set live data-bindings.
			var data = {
				url: $(origin).attr('href')
			};
			// Set content of tooltip.
			return Mustache.render(template, data);
		}
	});
	
});