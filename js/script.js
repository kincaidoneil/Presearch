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