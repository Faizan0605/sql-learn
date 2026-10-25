
const db = require('../utils/db-connection');


const addEntries = (req, res) => {
    const { email, name } = req.body;

    const insertQ = 'Insert into Users (email, name) values (?, ?)'


    db.execute(insertQ, [email, name], (err) => {
        if (err) {
            console.log(err.message)
            res.status(500).send(err.message);
            db.end();
            return
        }



        console.log("values has been inserted");
        res.status(200).send('User has beed added');
    })
}


const updateEntries = (req, res) => {
    const { id } = req.params;
    const { email, name } = req.body;

    const updateQ = 'update Users set name=?, email=? where id = ?';


    db.execute(updateQ, [email, name, id], (err, result) => {
        if (err) {
            console.log(err.message)
            res.status(500).send(err.message);
            db.end();
            return
        }

        if (result.affectedRows === 0) {
            res.status(404).send("User not found");
            return;
        }

        console.log("values has been updated");
        res.status(200).send('User has beed updated');
    })
}

const deleteEntries = (req, res) => {
    const { id } = req.params;

    const deleteQ = 'delete from Users where id = ?';


    db.execute(deleteQ, [id], (err, result) => {
        if (err) {
            console.log(err.message)
            res.status(500).send(err.message);
            db.end();
            return
        }


        if (result.affectedRows === 0) {
            res.status(404).send("User not found");
            return;
        }

        console.log("values has been deleted");
        res.status(200).send('User has beed deleted');
    })
}

module.exports = { addEntries, updateEntries, deleteEntries };
