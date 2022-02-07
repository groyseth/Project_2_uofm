
const sequelize = require('../config/connection');
const { User, Favorite, Sna } = require('../models');

const snaData = require('./snaData.json');
const userData = require('./userData.json');
const favData = require('./favData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  
  await Sna.bulkCreate(snaData, {
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