var http = require('http'),
	host = '127.0.0.1',
	fs = require('fs'),
	path = require('path'),
	port = '9000';

var mimes = {
	".htm" : "text/html",
	".css" : "text/css",
	".js" : "text/javascript",
	".gif" : "image/gif",
	".jpg" : "image/jpg",
	".png" : "image/png"

}

var server = http.createServer(function(req,res) {
	
	var filepath = (req.url === '/') ? ('./index-final.html') : ('.'+req.url);
	var contentType = mimes[path.extname(filepath)];

	fs.exists(filepath, function(file_exists) {
		if(file_exists) {
			fs.readFile(filepath, function(err,content) {
				if(err) {
					res.writeHead(500);
					res.end();
				} else {
					res.writeHead(200, {'Content-Type' : contentType});
					res.end(content,'utf-8');
				}
			})

		} else {
			res.writeHead(404);
			res.end('Sorry, page not found');
		}
	})



}).listen(port,host,function() {
	console.log('Server running on http://localhost'+host+':'+port);
})