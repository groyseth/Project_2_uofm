
const sequelize = require('../config/connection');
const { User, Favorite } = require('../models');

const userData = require('./userData.JSON');
const favData = require('./favData.JSON');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Favorite.bulkCreate(favData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();