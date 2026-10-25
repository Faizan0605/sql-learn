const express = require('express');
const db = require('./utils/db-connection')
const userRoutes = require('./routes/userRoutes')
const busRoutes = require('./routes/busRoutes')

const app = express();
const port = 3333;
app.use(express.json());


app.get('/', (req, res) => {
    res.send("HEllow")
})

app.use("/users", userRoutes);
app.use("/buses", busRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});