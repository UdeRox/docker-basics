var http = require('http');
const EventEmitter = require('events');
const emmiter = new EventEmitter();

http.createServer(function (request, response) {
    console.log("Server is up and running on 3000");
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*'
    });
    emmiter.emit('test-event')
    response.end('Hello World Test\n');
}).listen(3000);


emmiter.on('test-event', function() {
    console.log("Test With the event ")
})