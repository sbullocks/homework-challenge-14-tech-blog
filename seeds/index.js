const sequelize = require('../config/connection');

const userSeed = require('./userSeed.json');
const commentSeed = require('./commentSeed.json');
const postSeed = require('./postSeed.json');


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
