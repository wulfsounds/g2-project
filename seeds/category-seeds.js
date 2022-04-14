// Borrowed from ecomm hw
const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Italian',
  },
  {
    category_name: 'Mexican',
  },
  {
    category_name: 'French',
  },
  {
    category_name: 'Cajun',
  },
  {
    category_name: 'Indian',
  },
  {
    category_name: 'Thai',
  },
  {
    category_name: 'Brunch',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;