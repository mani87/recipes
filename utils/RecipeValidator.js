function isValidRecipe(recipe) {
    const keys = Object.keys(recipe);

    const name = keys.find((k) => k == 'name');
    const instructions = keys.find((k) => k == 'instructions');
    const ingredients = keys.find((k) => k == 'ingredients');
    const prepTime = keys.find((k) => k == 'prepTime');

    return name && instructions && ingredients && prepTime && keys.length === 4;
}

module.exports = isValidRecipe;