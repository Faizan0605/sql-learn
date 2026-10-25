const express = require('express');
const db = require('./utils/db-connection')
const userRoutes = require('./routes/userRoutes')

const app = express();
const port = 3333;
app.use(express.json());


app.get('/', (req, res) => {
    res.send("HEllow")
})

app.use("/users", userRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});