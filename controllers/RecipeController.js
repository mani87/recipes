const RecipeService = require('../services/RecipeService');
const isValidRecipe = require('../utils/RecipeValidator')

class RecipeController {
    create(req, res) {
        try {
            const recipe = req.body;

            if (!isValidRecipe(recipe)) {
                return res.status(422).json("Invalid recipe, please provide a correct one");
            }

            return res.status(200).json(RecipeService.create(recipe));
        } catch (err) {
            return res.status(500).json("Error occured while processing your request");
        }
        
    }

    listAll(req, res) {
        try {
            return res.status(200).json(RecipeService.getAllRecipes());
        } catch (err) {
            return res.status(500).json("Error occured while processing your request");
        }
    }

    delete(req, res) {
        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json("Please provide recipe id");
            }

            RecipeService.delete(id);
            return res.status(200).json(`Recipe with id ${id} deleted successfully.`);
        } catch (err) {
            return res.status(500).json("Error occured while processing your request");
        }
    }

    update(req, res) {
        try {
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
        } catch (err) {
            console.log(err);
            return res.status(500).json("Error occured while processing your request");
        }
    }

    getRecipeById(req, res) {
        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json("Please provide recipe id");
            }

            const recipe = RecipeService.getById(id);
            if (!recipe) {
                return res.status(404).json("No such recipe exists");
            }

            res.status(200).json(recipe);
        } catch (err) {
            return res.status(500).json("Error occured while processing your request");
        }
    }
}

module.exports = new RecipeController();