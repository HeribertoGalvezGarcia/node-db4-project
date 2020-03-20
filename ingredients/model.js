const db = require('../data/dbConfig');

module.exports = {
  getRecipes
};

function getRecipes(id) {
  return db('ingredients')
    .join('recipeIngredients', 'ingredients.id', 'ingredient_id')
    .join('recipes', 'recipe_id', 'recipes.id')
    .where({'ingredients.id': id})
    .select('recipes.name')
}
