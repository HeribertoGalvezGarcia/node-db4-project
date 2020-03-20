const express = require('express');

const recipeRouter = require('./recipes/router');
const ingredientRouter = require('./ingredients/router');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);

module.exports = server;