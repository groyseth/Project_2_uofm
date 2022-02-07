const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sna extends Model {}

Sna.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        sna_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sna_tags: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sna_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sna_notes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sna_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },   
    },
    {
        sequelize,
        timestamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: 'sna'
    }
);
// create sna seeds and it wants to find the sna id where it matches the user id
module.exports = Sna;