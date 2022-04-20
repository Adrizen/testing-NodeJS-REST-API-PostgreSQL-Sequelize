const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'postgres',  // Database name.
    'postgres',  // Username.
    'admin',     // Password.
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false  // Avoid seeing operations in terminal.
    }
);

// Sync tables with Postgres DB.
sequelize.sync().then(() => {
    console.log('Table Synced');
}, (err) => {
    console.log(err);
});

module.exports = sequelize;