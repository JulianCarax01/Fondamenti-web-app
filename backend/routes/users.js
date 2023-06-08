const express = require('express');
const usersController = require('../controllers/users');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: 'root for posts api'});
});
//All'inserimento dei file nel form , andiamo a /login dove chiameremo loginUser
router.post('/login', usersController.loginUser);

router.post('/signup', usersController.addUser);

module.exports = router;





