
const User = require('./User');
const Favorite = require('./Favorite');
const Sna = require('./Sna');


// Favorite.belongsTo(User, {
//     foreignKey: 'id',
//     // onDelete: 'CASCADE'
//   });
  
// //   User.hasMany(Sna, {
// //     foreignKey: 'id',
// //     onDelete: 'CASCADE'
// //   });
// Favorite.belongsTo(Sna, {
//     foreignKey: 'sna_id',
//     // onDelete: 'CASCADE'
//   });

//   Sna.hasMany(Favorite, {
//     foreignKey: 'sna_id',
//     // onDelete: 'CASCADE'
//   });

  
  
//   User.hasMany(Favorite, {
//     foreignKey: 'user_id',
//     // onDelete: 'CASCADE'
//   });


  User.belongsToMany(Sna, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Favorite,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'favorite_user'
  });
  
  Sna.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Favorite,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'favorite_sna'
  });

module.exports = { User, Favorite, Sna };

