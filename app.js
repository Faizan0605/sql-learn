const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3333;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'your_database_name'
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

    const createBuses = `
        CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(20) NOT NULL,
            totalSeats INT NOT NULL,
            availableSeats INT NOT NULL
        )
    `;

    const createBookings = `
        CREATE TABLE IF NOT EXISTS Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber VARCHAR(10) NOT NULL
        )
    `;

    const createPayments = `
        CREATE TABLE IF NOT EXISTS Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid DECIMAL(10, 2) NOT NULL,
            paymentStatus VARCHAR(20) NOT NULL
        )
    `;

    // Execute queries
    const queries = [createUsers, createBuses, createBookings, createPayments];

    queries.forEach(query => {
        connection.execute(query, (err) => {
            if (err) {
                console.error("Error executing query:", err);
            }
        });
    });

    console.log("Table creation queries executed.");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});