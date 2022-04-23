const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const User = require('../models/User')

const Post = sequelize.define('Post', {
    title: {
        type: Sequelize.TEXT,
    },
    body: {
        type: Sequelize.TEXT
    },
    userid: {
        type: Sequelize.INTEGER,
        references: {
            model: "users",
            key: "id"
        },
        onDelete: "CASCADE"
    }
}, {
    tableName: "posts"
});

Post.associate = function(models) {
    Post.belongsTo(User, { as: "authors", foreignKey: "userid" })
};

module.exports = Post;