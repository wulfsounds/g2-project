const { Recipe } = require('../models');

const recipeData = [
  {
    recipe_name: 'Lasagna',
    recipe_link: 'linked text',
    category_id: 1,
  },
  {
    recipe_name: 'Carne Asada Street Tacos with Elote',
    recipe_link: 'linked text',
    category_id: 2,
  },
  {
    recipe_name: 'Boeuf bourguignon',
    recipe_link: 'linked text',
    category_id: 3,
  },
  {
    recipe_name: 'Gumbo',
    recipe_link: 'linked text',
    category_id: 4,
  },
  {
    recipe_name: 'Chicken Tikka Masala with Saffron Jasmine Rice',
    recipe_link: 'linked text',
    category_id: 5,
  },
  {
    recipe_name: 'Thai Green Curry with Shrimp',
    recipe_link: 'linked text',
    category_id: 6,
  },
  {
    recipe_name: 'Eggs Benedict',
    recipe_link: 'linked text',
    category_id: 7,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
