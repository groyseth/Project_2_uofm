const { render } = require('express/lib/response');

const router = require('express').Router();

router.get('/', async (req, res) => {
  // console.log(req.session.logged_in);
    try {
      if (!req.session.logged_in) {
        // res.status(400).json({ message: 'You must first login!' });
        res.redirect('/');
    } else {  
        res.render('favorites', {});
      }

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;