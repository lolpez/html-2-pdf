var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf8');
var options = { format: 'Letter' };

pdf.create(html, options).toFile('./files/generated.pdf', function (err, res) {
	if (err) return console.log(err);
	console.log(`PDF generated at: "${res.filename}"`);
});