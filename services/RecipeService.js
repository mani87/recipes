class RecipeService {

    constructor(recipes) {
        this.recipes = [];
        this.counter = 100;
    }

    getAllRecipes(offset, limit, filters) {
        const { name } = filters;
        if (name) {
            const filtered = this.recipes.filter((r) => r.name.includes(name));
            return filtered.slice(offset, offset+limit);
        }

        return this.recipes.slice(offset, offset+limit);
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

        const old = this.recipes[idx];
        if (recipe.name && old.name != recipe.name) {
            old.name = recipe.name;
        }
        if (recipe.instructions && old.instructions != recipe.instructions) {
            old.instructions = recipe.instructions;
        }
        if (recipe.ingredients && old.ingredients != recipe.ingredients) {
            old.ingredients = recipe.ingredients;
        }
        if (recipe.prepTime && old.prepTime != recipe.prepTime) {
            old.prepTime = recipe.prepTime;
        }
        this.recipes[idx] = old;
        return old;
    }

    delete(id) {
        this.recipes = this.recipes.filter((r) => r.id != id);
    }
}

module.exports = new RecipeService();