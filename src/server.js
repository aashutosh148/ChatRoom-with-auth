const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const socket = require('./utils/socket');

const port = process.env.PORT || 3000;

socket.initialize(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});