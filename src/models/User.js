const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const Post = require('../models/Post')
const Role = require('../models/Role')

const User = sequelize.define('users', {
    name: {
        type: Sequelize.TEXT,
        validate: {
            isAlpha: {
                msg: "Name field must only be: a-z | A-Z."
            },
            len: {
                args: [2, 255],
                msg: "Name must be at least 2 characters."
            }
        }
    },
    password: {
        type: Sequelize.TEXT,
        validate: { // Actually, it would be better to validate the password in the auth.controller
            len: {
                args: [6, 255],
                msg: "Password must be at least 6 characters."
            }
        }
    },
    email: {
        type: Sequelize.TEXT,
        unique: true,
        validate: {
            isEmail: {
                msg: "Must be a valid email"
            }
        }
    }
}, {
    tableName: 'users'
});

User.associate = function (models) {
    User.hasMany(Post, { as: "posts", foreignKey: "userid" });
    User.belongsToMany(Role, {  as: "roles",  through: "user_role"  , foreignKey: "user_id"  });
};

// Check if the user is admin.
User.isAdmin = function(roles){
    let tmpArray = [];
    roles.forEach(role => tmpArray.push(role.role));
    return tmpArray.includes('admin')
}

module.exports = User;