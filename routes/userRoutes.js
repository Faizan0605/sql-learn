const express = require('express');

const userController = require('../controller/userController');
const router = express.Router();


router.get('/', userController.getAllUsers);
router.post('/add', userController.addEntries);
router.put('/update/:id', userController.updateEntries);
router.delete('/delete/:id', userController.deleteEntries);


module.exports = router;