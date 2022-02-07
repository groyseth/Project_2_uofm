const router = require('express').Router();
const { Favorite } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const favData = await Favorite.findAll( {
           where: { session_id: req.session.id } })
        
        
        
        const favPost = favData.map((project) => project.get({ plain: true }));
        console.log(favPost);
         res.render('favorites', {
          favPost
         })

      // res.status(200).json(favData)
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  router.post('/',  async (req, res) => {
    try {
      const newFavorite = await Favorite.create({

        session_id: req.session.id,
        sna_id: req.body.sna_id
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
        
      res.status(200).json(newFavorite);
    } catch (err) {
      res.status(400).json(err);
    }
  });




//   router.get('/', async (req, res) => {
//     try {
//         const favData = await Favorite.findAll();
//         console.log(favData);
//         res.json(favData)
//     // res.render('favorites', {
// // { where: { user_id: req.params.id } }
       
//     //   });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

module.exports = router;