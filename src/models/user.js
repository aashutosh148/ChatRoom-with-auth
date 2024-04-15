const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database');
}).catch(err => {
    console.error('Connection error:', err);
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
