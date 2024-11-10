const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const mealsRouter = require('./meals');



router.use('/auth', authRouter);
router.use('/meals', mealsRouter);

module.exports = router;


