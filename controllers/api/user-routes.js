const router = require('express').Router();
const { User } = require('../../models');
const createLists = require('../../utils/createLists')
// CREATE new user
router.post('/', async (req, res) => {

  try {

    // check if password and confirm password inputs match
    // if (req.body.password === req.body.confirmpw) {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

    // } else {
    //   alert('Passwords do not match!')
    // }


    // As soon as user creates an account, automatically generate a list for each day (Mon-Sun).. createLists is under utils folder
    if(dbUserData) {
      createLists(dbUserData.id);
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      res.status(200).json(dbUserData);
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;