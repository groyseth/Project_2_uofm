const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
    res.render('homepage', {
       
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.logged_In) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('signup');
  });
module.exports = router;