const io = require('socket.io')();
const users = {};

const initialize = (server) => {
    io.attach(server);

    io.on('connection', (socket) => {
        socket.on('new-user-joined', (name) => {
            users[socket.id] = name;
            socket.broadcast.emit('user-joined', name);
        });

        socket.on('send', (message) => {
            socket.broadcast.emit('receive', { message, name: users[socket.id] });
        });

        socket.on('disconnect', () => {
            socket.broadcast.emit('left', users[socket.id]);
            delete users[socket.id];
        });
    });
};

module.exports = { initialize };