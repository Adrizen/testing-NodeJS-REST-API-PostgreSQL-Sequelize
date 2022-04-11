const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    projectID: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

module.exports = Task;