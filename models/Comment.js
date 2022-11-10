const { Model, DataTypes  } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        // prevents null values
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        // prevents null values
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    //   password: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //       len: [8],
    //     },
    //   },
    },
    {
    //   hooks: {
    //     beforeCreate: async (newUserData) => {
    //       newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //       return newUserData;
    //     },
    //     beforeUpdate: async (updatedUserData) => {
    //       updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    //       return updatedUserData;
    //     },
    //   },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Comment',
    }
  );
  
  module.exports = Comment;
  