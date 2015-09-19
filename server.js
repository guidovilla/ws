/*
var express = require('express')
var app = express()

app.set('port', (process.env.OPENSHIFT_NODEJS_PORT || 8080))
//app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/
console.log("po:", process.env.OPENSHIFT_NODEJS_PORT);

/*
var express = require('express')
var app = express()

app.set('port', (process.env.OPENSHIFT_NODEJS_PORT || 8080))
//app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/
// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
   response.writeHead(200, {"Content-Type": "text/plain"});
   response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
