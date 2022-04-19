const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedRecipe = require('./recipe-seeds');
const seedPlaylist = require('./playlist-seeds');
const seedWine = require('./wine-seeds');
const { User } = require('../models');

const userData = require('./userData.json');

// Seed database (npm run seed in Terminal)
const seedDatabase = async () => {
  
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedRecipe();
  console.log('\n----- RECIPE SEEDED -----\n');

  await seedPlaylist();
  console.log('\n----- PLAYLIST SEEDED -----\n');

  await seedWine();
  console.log('\n----- WINE SEEDED -----\n');
  
  // User seeding process
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);

};

seedDatabase();