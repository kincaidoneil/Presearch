$(document).ready(function() {
	
	var data = {};
	var list = {};
	$('a').tooltipster({
		arrow: true,
		contentAsHTML: true,
		delay: 500, // Set ms before tooltip is displayed.
		position: 'right',
		interactive: true,
		interactiveTolerance: 150, // Set ms before fade out after no activity.
		theme: 'tooltipster-shadow',
		functionInit: function(origin, content) {
			// Create template for tooltip.
			var template = '<div class="tooltip">\
				<a href="{{url}}">\
					<h4>Visit Page<\/h4>\
				<\/a>\
				<a id="addButton">\
					<h4>Add to List<\/h4>\
				<\/a>\
			<\/div>';
			// Set live data-bindings.
			data = {
				title: $(origin).attr('href'),
				url: $(origin).attr('href')
			};
			// Set content of tooltip.
			return Mustache.render(template, data);
		},
		functionBefore: function(origin,continueTooltip){
			continueTooltip();
		
	$('#addButton').click(function(){
				console.log("click recognized");
  		 		chrome.runtime.sendMessage({greeting: "ourthing"},function(response){
				console.log("message sent.");
				//list.push({{url}});
				});
				//document.getElementById(body).innerHTML = list{};
	});
		}
	});

	});

