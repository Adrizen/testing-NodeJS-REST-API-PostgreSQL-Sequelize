const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Task = require('./Tasks');

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Project.associate = function (models) {
    Project.hasMany(Task, { foreingKey: 'projectid', sourceKey: 'id' });
    Task.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id' })
}

module.exports = Project;