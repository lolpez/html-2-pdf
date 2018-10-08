var request = require('request');
var url = "https://etkv80dh9b.execute-api.us-east-2.amazonaws.com/default/html2pdf";
var fs = require('fs');
var html = fs.readFileSync('./index.html', 'utf8');

var options = {
	url: url,
	method: 'post',
	json: {
		name: "hello world",
		html: html
	}
};

request(options, function (error, response, body) {
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log('body:', body); // Print the HTML for the Google homepage.
});