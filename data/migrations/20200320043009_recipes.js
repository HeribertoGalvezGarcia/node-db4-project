exports.up = knex =>
  knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name')
        .notNullable()
        .unique();
    })
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name')
        .notNullable()
        .unique()
    })
    .createTable('recipeIngredients', tbl => {
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.float('quantity')
        .notNullable();
      tbl.primary(['recipe_id', 'ingredient_id']);
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('instruction_num')
        .notNullable();
      tbl.string('instruction')
        .notNullable();
    });

exports.down = knex =>
  knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipeIngredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('recipes');
