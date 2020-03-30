exports.seed = knex =>
  knex('recipes').del()
    .then(() =>
       knex('recipes').insert([
        {id: 1, name: 'toast'},
        {id: 2, name: 'hot milk'}
      ])
    );
