chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});

$(document).ready(function(){
	console.log('ready');

	// $('#pglLogin .flexslider').remove();
});

var elements = {};

function selectElements() {
	$loginPage = $('#pglLogin');
	$footer = $('#pglFooter')
}