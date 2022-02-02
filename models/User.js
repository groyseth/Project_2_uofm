const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config');

class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    }
  },
  {
    hooks: {
        beforeCreate: async (newUserData) => {
          try {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          } catch (err) {
            console.log(err);
            return err;
          }
        },
        beforeUpdate: async (updatedUserData) => {
          try {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password,10);
            return updatedUserData;
          } catch (err) {
            console.log(err);
            return err;
          }
        },
      },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
