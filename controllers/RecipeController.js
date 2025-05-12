const RecipeService = require('../services/RecipeService');
const isValidRecipe = require('../utils/RecipeValidator')

class RecipeController {
    create(req, res) {
        const recipe = req.body;

        if (!isValidRecipe(recipe)) {
            return res.status(422).json("Invalid recipe, please provide a correct one");
        }

        res.status(200).json(RecipeService.create(recipe));
    }

    listAll(req, res) {
        res.status(200).json(RecipeService.getAllRecipes());
    }

    delete(req, res) {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json("Please provide recipe id");
        }

        RecipeService.delete(id);
        res.status(200).json(`Recipe with id ${id} deleted successfully.`);
    }

    update(req, res) {
        const id = req.params.id;
        const updatedRecipe = req.body;

        if (!id) {
            return res.status(400).json("Please provide recipe id");
        }

        if (!isValidRecipe(updatedRecipe)) {
            return res.status(422).json("Invalid recipe, please provide a correct one");
        }
        const recipe = RecipeService.update(id, updatedRecipe)
        if (!recipe) {
            return res.status(404).json("No such recipe exists to update");
        }

        res.status(200).json(recipe);
    }

    getRecipeById(req, res) {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json("Please provide recipe id");
        }

        const recipe = RecipeService.getById(id);
        if (!recipe) {
            return res.status(404).json("No such recipe exists");
        }

        res.status(200).json(recipe);
    }
}

module.exports = new RecipeController();