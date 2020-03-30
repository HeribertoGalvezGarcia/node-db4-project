exports.seed = knex =>
  knex('recipes').del()
    .then(() =>
      knex('recipes').insert([
        {id: 1, name: 'bread'},
        {id: 2, name: 'milk'}
      ])
    );
