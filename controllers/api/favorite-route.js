const router = require('express').Router();
const { Favorite } = require('../../models');


router.get('/:id', async (req, res) => {
    try {
        const favData = await Favorite.findAll({ where: { id: req.params.id } });
        console.log(favData);
        res.json(favData)
    // res.render('favorites', {

       
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  







module.exports = router;