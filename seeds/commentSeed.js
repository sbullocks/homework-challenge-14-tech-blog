const { Comment } = require('../models');

const commentSeed = [
  {
    content: 'This is a test from commentSeed.js .',
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentSeed);

module.exports = seedComments;