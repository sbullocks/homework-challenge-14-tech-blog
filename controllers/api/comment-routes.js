const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new user
router.post('/', withAuth, async (req, res) => {
  try {
    const latestComment = await Comment.create({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: req.body.password,
    ...req.body,
    user_id: req.session.user_id,
    });
    res.json(latestComment);

    // Set up sessions with a 'loggedIn' variable set to `true`
    // req.session.save(() => {
    //   req.session.loggedIn = true;

    //   res.status(200).json(latestUser);
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
