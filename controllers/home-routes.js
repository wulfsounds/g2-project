const router = require('express').Router();
const { User, List, Day, Task, Category, Recipe, Wine, Playlist } = require('../models');
const dailyWeather = require('../utils/dailyWeather');

// GET weekly view page and JOIN with user data
router.get('/weekly', async (req, res) => {

    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {

        try {
          const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [
              { model: List,
                where: {
                  list_date: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                },
                include: [ {model: Task} ]
              }
            ],
          });
          
          // Get user data
          const user = userData.get({ plain: true });
          console.log(user);

          // Get local weather data
          const weatherData = await dailyWeather();
          
          // Get culinary experience data
          const newCulExp = await Category.findByPk(1, {
            include: [ { model: Recipe }, { model: Wine }, {model: Playlist } ],
          });
          const culExp = newCulExp.get({ plain: true });

          // Render all data to homepage
          res.render('homepage', {
            ...user, 
            ...culExp,
            data: weatherData,
            loggedIn: req.session.loggedIn,
          });
          
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
    }

});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router; 