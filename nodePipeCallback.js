var net = require('net');
var server = net.createServer(function(c) {
	console.log('new connection says hello :)\r\n');
});
server.listen(5001, 'localhost');
