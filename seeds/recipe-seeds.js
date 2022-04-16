const { Recipe } = require('../models');

const recipeData = [
  {
    recipe_name: 'Lasagna',
    recipe_link: 'https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/',
    category_id: 1,
  },
  {
    recipe_name: 'Carne Asada Street Tacos',
    recipe_link: 'https://carlsbadcravings.com/carne-asada-street-tacos/',
    category_id: 2,
  },
  {
    recipe_name: 'Boeuf bourguignon',
    recipe_link: 'https://www.foodnetwork.com/recipes/ina-garten/beef-bourguignon-recipe-1942045',
    category_id: 3,
  },
  {
    recipe_name: 'Cajun Gumbo',
    recipe_link: 'https://tastesbetterfromscratch.com/authentic-new-orleans-style-gumbo/',
    category_id: 4,
  },
  {
    recipe_name: 'Chicken Tikka Masala with Jasmine Rice',
    recipe_link: 'https://www.food.com/recipe/chicken-tikka-masala-with-seasoned-jasmine-rice-334860',
    category_id: 5,
  },
  {
    recipe_name: 'Thai Green Curry Shrimp',
    recipe_link: 'https://www.recipemagik.com/green-curry-shrimp-thai-green-curry-recipe/',
    category_id: 6,
  },
  {
    recipe_name: 'Eggs Benedict',
    recipe_link: 'https://tastesbetterfromscratch.com/eggs-benedict-with-homemade-hollandaise-sauce/',
    category_id: 7,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;