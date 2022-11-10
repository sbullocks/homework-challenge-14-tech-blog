const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
// GET all for homepage
router.get('/', withAuth, async (req, res) => {
  // try {
  //   const userData = await User.findAll({
  //     attributes: { exclude: ['password'] },
  //     order: [['name', 'ASC']],
  //   });

  //   const users = userData.map((project) => project.get({ plain: true }));

  //   res.render('homepage', {
  //     users,
  //     // Pass the logged in flag to the template
  //     logged_in: req.session.logged_in,
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/login', withAuth, async (req, res) => {
  // // If a session exists, redirect the request to the homepage
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  // res.render('login');
});

// GET one by id
router.get('/post/:id', withAuth, async (req, res) => {

});

// GET route for signup
router.get('/signup', withAuth, async (req, res) => {

});

module.exports = router;
