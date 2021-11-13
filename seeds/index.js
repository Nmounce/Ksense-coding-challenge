const seed = fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(json => console.log(json))


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('/n-----DATABASE SYNCED-----/n');
    await seed();
    console.log('/n----USERS SYNCED-----/n');

    process.exit(0);
};

seedAll();