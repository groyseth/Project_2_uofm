const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      if (!req.session.logged_in) {
        res.redirect('/');
    } else {  
    res.render('resources', {});
    } 
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;