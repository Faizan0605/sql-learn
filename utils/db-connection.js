
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12839418',
    password: 'wRXYaM9RbW',
    database: 'sql12839418'
});


connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connection has been created");



    const createUsers = `
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL
        )
    `;

    // const createBuses = `
    //     CREATE TABLE IF NOT EXISTS Buses (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         busNumber VARCHAR(20) NOT NULL,
    //         totalSeats INT NOT NULL,
    //         availableSeats INT NOT NULL
    //     )
    // `;

    // const createBookings = `
    //     CREATE TABLE IF NOT EXISTS Bookings (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         seatNumber VARCHAR(10) NOT NULL
    //     )
    // `;

    // const createPayments = `
    //     CREATE TABLE IF NOT EXISTS Payments (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         amountPaid DECIMAL(10, 2) NOT NULL,
    //         paymentStatus VARCHAR(20) NOT NULL
    //     )
    // `;

    // Execute queries
    const queries = [createUsers
        // , createBuses, createBookings, createPayments
    ];

    queries.forEach(query => {
        connection.execute(query, (err) => {
            if (err) {
                console.error("Error executing query:", err);
            }
        });
    });

    console.log("Table creation queries executed.");
});


module.exports = connection;