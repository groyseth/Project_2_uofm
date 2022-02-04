const router = require('express').Router();






// router.post('/', async (req, res) => {
//     try {
//       const userData = await User.create(req.body);
//       console.log(userData);
//       req.session.save(() => {
//         req.session.user_id = userData.id;
//         req.session.logged_in = true;
  
//         res.status(200).json({message: 'Successfully created User', userData});
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });
  module.exports = router;