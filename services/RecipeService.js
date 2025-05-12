class RecipeService {

    constructor(recipes) {
        this.recipes = [];
        this.counter = 100;
    }

    getAllRecipes() {
        return this.recipes;
    }

    create(recipe) {
        this.recipes.push(recipe);
        this.counter++;
        recipe.id = this.counter;
        return recipe;
    }

    getById(id) {
        return this.recipes.find((r) => r.id == id);
    }

    update(id, recipe) {
        const idx = this.recipes.findIndex((r) => r.id == id);
        if (idx == -1) return null;
        this.recipes[idx] = recipe;
        return recipe;
    }

    delete(id) {
        this.recipes = this.recipes.filter((r) => r.id != id);
    }
}

module.exports = new RecipeService();