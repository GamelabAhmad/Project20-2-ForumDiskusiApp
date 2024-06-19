const express = require('express');
const registerController = require('../controller/registerController');

const router = express.Router();

router.post('/register', registerController.registerUser);

module.exports = router;