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
app.get('/api/tables', (req, res) => res.json(reservation.tables));
app.get('/api/waitlist', (req, res) => res.json(reservation.waitlist));

app.listen(PORT, function () {
    console.log('Express server listening');
});

let reservation = {
    tables: [],
    waitlist: []
}

// Create post request to delete the reservations.table array

    app.post('/api/clear', (req, res) => {
        reservation = {
            tables: [],
            waitlist: []
        };

        // Send the reservation object back
        (res.send(reservation));
    })



app.post('/api/reserve', (req, res) => {
    // console.log(req.body);

    if (reservation.tables.length < 5) {
        reservation.tables.push(req.body);

    } else {
        reservation.waitlist.push(req.body);
    }
    // console.log('tables :', tables);
    // console.log('waitlist :', waitlist);

    // console.log(reservation.tables.length);
    // console.log(reservation.waitlist.length);
    console.log(reservation);
    res.send(reservation);
});
