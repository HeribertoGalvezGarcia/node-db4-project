exports.seed = knex =>
  knex('recipeIngredients').del()
    .then(() =>
      knex('recipeIngredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1},
        {recipe_id: 2, ingredient_id: 2, quantity: 1}
      ])
    );
