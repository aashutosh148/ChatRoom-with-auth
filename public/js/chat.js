const socket = io();
const messageContainer = document.querySelector('#message-container');
const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#send-button');
console.log("messageInput:", messageInput);
console.log("sendButton:", sendButton);

const appendMessage = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message', position);
    messageContainer.append(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
};

const name = prompt('Enter your name to join the chat');
socket.emit('new-user-joined', name);

socket.on('user-joined', (name) => {
    appendMessage(`${name} joined the chat`, 'right');
});

socket.on('receive', ({ message, name }) => {
    appendMessage(`${name}: ${message}`, 'left');
});

socket.on('left', (name) => {
    appendMessage(`${name} left the chat`, 'left');
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const message = messageInput.value;
        appendMessage(`You: ${message}`, 'right');
        socket.emit('send', message);
        messageInput.value = '';
    }
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    appendMessage(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});