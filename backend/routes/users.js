const express = require('express');
const usersController = require('../controllers/users');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'root for posts api'});
});
//All'inserimento dei file nel form , andiamo a /login dove chiameremo loginUser
router.post('/login', usersController.loginUser);


router.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

router.post('/signup', usersController.addUser);

router.post('/sendMessage', usersController.sendMessage);

router.get('/viewChat', usersController.viewChat)


module.exports = router;





