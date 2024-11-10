const express = require('express');
const router = express.Router();
const { getMeals, createMeal, getMeal, editMeal} = require('../controllers/meals');


router.get('/:id', getMeal);
router.patch('/:id', editMeal);
router.get('/', getMeals);
router.post('/', createMeal);

module.exports = router;