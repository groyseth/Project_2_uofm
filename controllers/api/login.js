const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        // username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
  
      req.session.save(() => {
        // req.session.user_id = userData.id;
        req.session.loggedIn = true;
  
        res.status(200).json({message: 'Successfully created User', userData});
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       // req.session.user_id = userData.id;
//       req.session.loggedIn = true;
//       req.session.cookie;
//       res
//       .status(200)
//       .json({ user: userData, message: 'You are now logged in!' });
//   });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      // console.log(
      //   '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
      //   req.session.cookie
      // );

      res
        .status(200)
        .json({ message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
