const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const user = sequelize.define('users', {
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
},{
    tableName: 'users'
});


module.exports = user;