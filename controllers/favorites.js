// const { render } = require('express/lib/response');
const withAuth = require('../utils/auth')


const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {
  // console.log(req.session.logged_in);
    try {
        
        res.render('favorites', {});
      

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;