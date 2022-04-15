const router = require('express').Router();
const { User } = require('../../models');
const createLists = require('../../utils/createLists')

// CREATE new user
router.post('/', async (req, res) => {

  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

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

module.exports = router;
