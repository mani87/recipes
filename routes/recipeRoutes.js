const express = require('express');

const controller = require('../controllers/RecipeController')

const router = express.Router();

router.get('/', controller.listAll);
router.post('/create', controller.create);
router.get('/:id', controller.getRecipeById);
router.patch('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;