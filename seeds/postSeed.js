const { Post } = require('../models');

const postSeed = [
  {
    title: 'This is a test from postSeed.js .',
    name: 'Stephen',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postSeed);

module.exports = seedPosts;