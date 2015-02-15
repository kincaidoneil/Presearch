sampleData = {hello: 3, foo: "bar"};

saveLinks(sampleData, function() {
	loadLinks(function(data) {
		console.log(data);
	});
});

function loadLinks(callback) {
	
	chrome.storage.sync.get('bookmarkData', function(data) {
		// Check if no links exist
		if ($.isEmptyObject(data)) {
			// Error!
			return false;
		} else {
			// Success!
			callback(data);
		}
	});
	
}

function saveLinks(data, callback) {
	
	chrome.storage.sync.set({'bookmarkData': data}, function(data) {
		callback();
	});
	
}

$(document).ready(function() {
	
	// $("#declaration").data("powertip", "This will be the <b>tooltip text</b>.");
	// $("#declaration").powerTip({placement: "e", mouseOnToPopup: true});
	
	// $('#declaration').tooltipster({
	// 	content: $('<h5>Hi! What is up?<\/h5>')
	// });
	
	// chrome.tabs.executeScript(null, {file: "scripts/jquery.min.js"});
	// chrome.tabs.executeScript(null, {file: "scripts/jquery.powertip.min.js"});
	// chrome.tabs.executeScript(null, {file: "scripts/jquery.tooltipster.min.js"});
	// chrome.tabs.executeScript(null, {file: "scripts/tooltip.js"});
	
});