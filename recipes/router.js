const express = require('express');

const recipes = require('./model.js');

const router = express.Router();

router.get('/', (req, res) => {
  recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(() => {
      res.status(500).json({message: 'Failed to get recipes'});
    });
});

router.get('/:id/shoppingList', ({params: {id}}, res) => {
  recipes.getShoppingList(id)
    .then(shoppingList => {
      if (shoppingList) {
        res.json(shoppingList);
      } else {
        res.status(404).json({message: 'Could not find recipe with given id.'});
      }
    })
    .catch(() => res.status(500).json({message: 'Failed to get recipes'}));
});

router.get('/:id/instructions', ({params: {id}}, res) => {
  recipes.getInstructions(id)
    .then(instructions => {
      if (instructions) {
        res.json(instructions);
      } else {
        res.status(404).json({message: 'Could not find steps for given recipe'})
      }
    })
    .catch(() => res.status(500).json({message: 'Failed to get steps'}));
});

module.exports = router;
