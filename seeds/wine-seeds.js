const { Wine } = require('../models');

const wineData = [
  {
    wine_name: 'Chianti Classico',
    category_id: 1,
  },
  {
    wine_name: 'Tempranillo',
    category_id: 2,
  },
  {
    wine_name: 'Cabernet',
    category_id: 3,
  },
  {
    wine_name: 'Gewurztraminer',
    category_id: 4,
  },
  {
    wine_name: 'Riesling',
    category_id: 5,
  },
  {
    wine_name: 'Sauvignon Blanc',
    category_id: 6,
  },
  {
    wine_name: 'Prosecco',
    category_id: 7,
  },
];

const seedWine = () => Wine.bulkCreate(wineData);

module.exports = seedWine;