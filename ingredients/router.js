const express = require('express');

const ingredients = require('./model.js');

const router = express.Router();

router.get('/:id/recipes', ({params: {id}}, res) => {
  ingredients.getRecipes(id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(() => {
      res.status(500).json({message: 'Failed to get recipes'});
    });
});

module.exports = router;
