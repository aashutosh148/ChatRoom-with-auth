const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true,
}));


const viewsPath = path.join(__dirname, 'views');
app.set('view engine', 'hbs');
app.set('views', viewsPath);

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));


const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
app.use('/', authRoutes);
app.use('/chat', chatRoutes);

module.exports = app;