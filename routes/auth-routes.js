const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.render('login', { user: req.user })
});

// auth logout
router.get('/logout', (req, res) => {
  res.send('loggingout');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('redirect page');
})

module.exports = router;