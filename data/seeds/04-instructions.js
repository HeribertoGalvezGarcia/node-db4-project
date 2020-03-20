exports.seed = knex =>
  knex('instructions').del()
    .then(() =>
      knex('instructions').insert([
        {id: 1, recipe_id: 1, instruction_num: 1, instruction: 'Put bread into toaster'},
        {id: 2, recipe_id: 1, instruction_num: 2, instruction: 'Turn on toaster'},
        {id: 3, recipe_id: 1, instruction_num: 3, instruction: 'Take out toast'},
        {id: 4, recipe_id: 2, instruction_num: 1, instruction: 'Pour milk into cup'},
        {id: 5, recipe_id: 2, instruction_num: 2, instruction: 'Put cup into microwave'}
      ])
    );
