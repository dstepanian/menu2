const express = require('express');
const router = express.Router();
const {  loginFunction  } = require('../controllers/auth');

router.post('/login',  loginFunction);

module.exports = router;