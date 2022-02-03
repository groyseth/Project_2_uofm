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
            type: DataTypes.ARRAY,
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
            type: DataTypes.INTEGER,
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

module.exports = Sna;