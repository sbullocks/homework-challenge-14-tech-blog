const { Post } = require('../models');

const postSeed = [
  {
    title: 'This is a test from postSeed.js .',
    input: 'This is just a test message from the input section on postSeed.js .',
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postSeed);

module.exports = seedPost;