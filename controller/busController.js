const db = require('../utils/db-connection');

const addBus = (req, res) => {
    const { busNumber, totalSeats, availableSeats } = req.body;

    if (!busNumber || totalSeats === undefined) {
        return res.status(400).send('busNumber and totalSeats are required');
    }

    const seatsAvailable = availableSeats !== undefined ? availableSeats : totalSeats;
    const insertQ = 'INSERT INTO Buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)';

    db.execute(insertQ, [busNumber, totalSeats, seatsAvailable], (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send(err.message);
        }

        console.log("Bus has been added");
        res.status(201).json({ message: 'Bus has been added', id: result.insertId });
    });
};

const getAvailableBuses = (req, res) => {
    const { seats } = req.params;

    const seatCount = Number(seats);
    if (isNaN(seatCount) || seatCount < 0) {
        return res.status(400).send('Invalid seats parameter. Must be a valid non-negative number.');
    }

    const selectQ = 'SELECT * FROM Buses WHERE availableSeats > ?';

    db.execute(selectQ, [seatCount], (err, results) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send(err.message);
        }

        res.status(200).json(results);
    });
};

module.exports = { addBus, getAvailableBuses };
