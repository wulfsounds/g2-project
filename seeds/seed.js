
// Borrowed from unit 14-MVC Mini Project
const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedRecipe = require('./recipe-seeds');
const seedPlaylist = require('./playlist-seeds');
const seedWine = require('./wine-seeds');
const { User } = require('../models');

const userData = require('./userData.json');

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
  

  //User seeding process
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // (cite: unit14-MVC mini-project) When user creates new project, is this needed?
    //Possibly used for when user signs up and creates a new calendar?
  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();