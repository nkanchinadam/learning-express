const http = require('http');

//const server = http.createServer((req: any, res: any) => {
//  res.end('Welcome');
//});

// Using Event Emitter API
// Server class is a subclass of EventEmitter
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req: any, res: any) => {
  res.end('Welcome');
});

server.listen(5000);