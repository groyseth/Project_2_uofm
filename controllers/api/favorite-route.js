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


  router.post('/',  async (req, res) => {
    try {
      const newFavorite = await Favorite.create({
        user_id: req.body.user_id,
        sna_id: req.body.sna_id,
        // userId: req.session.user_id,
        
        // ...req.body,
        // user_id: req.session.user_id,
        // postId: req.session.postId
      //   include: [
      //     {
      //       model: User,
      //       attributes: ['id'],
      //     },
      //   ],
      // // });
      });
      
      console.log(newFavorite);
        
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });






module.exports = router;