const seedUsers = require('./user-seed');
const seedPosts = require('./post-seed');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('/n-----DATABASE SYNCED-----/n');
    await seedUsers();
    console.log('/n----USERS SYNCED-----/n');
    await seedPosts();
    console.log('/n----POSTS SYNCED-----/n');

    process.exit(0);
};

seedAll();