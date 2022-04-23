const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const User = require('../models/User')

const Role = sequelize.define('Role', {
    role: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    tableName: 'roles'
});


Role.associate = function (models) {
    Role.belongsToMany(User, {  as: "users",  through: "user_role"  , foreignKey: "role_id"  });
};



module.exports = Role;