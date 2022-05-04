const sequelize = require('../config/connection');

const seedPosts = require('./postSeed');
const seedComments = require('./commentSeed');

const seedAll = async () => {
    await sequelize.sync({ force: false });

    await seedPosts();

    await seedComments();

    process.exit(0);
}

seedAll();