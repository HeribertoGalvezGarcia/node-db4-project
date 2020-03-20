const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(id) {
  return db('recipes')
    .join('recipeIngredients', 'recipes.id', 'recipe_id')
    .join('recipes', 'ingredient_id', 'recipes.id')
    .where({'recipes.id': id})
    .select('recipes.name', 'quantity');
}

function getInstructions(id) {
  return db('recipes')
    .join('instructions', 'recipes.id', 'recipe_id')
    .where({'recipes.id': id})
    .select('instruction_num', 'instruction');
}
