const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // comment_creator: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'blog',
            key: 'id',
        },
    },
    comment_author_id: {
      type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
