const sequelize = require('../config/connection');

const seedUsers = require('./userSeed.js');
const seedComments = require('./commentSeed.js');
const seedPosts = require('./postSeed.js');


const seedData = async () => {
    await sequelize.sync({ force: true });
    console.log('-SEED DATA-')
  
    await seedUsers();
    console.log('-SEED USERS-')
  
    await seedComments();
    console.log('-SEED COMMENTS-')

    await seedPosts();
    console.log('-SEED POSTS-')
  
    process.exit(0);
  };
  
  seedData();
