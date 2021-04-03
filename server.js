//jshint esversion:6
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'src/home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'src/tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'src/reserve.html')));
app.get('api/tables', (req, res) => res.json(tables));
app.get('/api/waitlist', (req, res) => res.json(waitlist));

app.listen(3000, function () {
    console.log('Express server listening');
});
