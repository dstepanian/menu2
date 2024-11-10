const Meal = require('../models/meal');

const getMeal = async (req, res) => {
    try {
        const meal = await Meal.findById(req.params.id)
        res.send(meal)
    } catch (error) {
        console.log(error)
    }
}

const getMeals = async (req, res) => {
    try {
        const meals = await Meal.find()
        res.send(meals)
    } catch (error) {
        console.log(error)
    }
}

const editMeal = async (req, res) => {
    try {
        const meal = await Meal.findById(req.params.id)
        meal.name = req.body.name
        meal.price = req.body.price
        meal.description = req.body.description
        meal.image = req.body.image
        await meal.save()
        res.send(meal)

    } catch (error) {
        console.log(error)
    }
}

const createMeal = async (req, res) => {
    try {
        const {name, price, description, image} = req.body

        const meal = new Meal({name, price, description, image})
        await meal.save()

        res.status(200).json(meal)
    } catch (err) {
        console.log(err)
    }
}

module.exports = { getMeals, createMeal, getMeal, editMeal }
