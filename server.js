const http = require('http');
const app = require('./app.js');
require('dotenv').config();

const port = process.env.PORT;

const server = http.createServer(app);

server.on('listening',() => {
    console.log("server en route sur le port : " + port);
});

server.listen(port);