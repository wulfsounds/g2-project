const router = require('express').Router();
const { User, List, Day, Task, Category, Recipe, Wine, Playlist } = require('../models');


// get daily view
router.get('/day', async (req, res) => {

  try {
    const userDay = await User.findByPk(15, {
      attributes: { exclude: ['password'] },
      include: [
        { model: Day,
          where: {
            day_time: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', 
            '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', 
            '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', 
            '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']
          },
          include: [ {model: Task} ]
        }
      ],
    });
  
    const wholeDay = userDay.get({ plain: true });
    // console.log(user);

    res.render('dayCal', {
      ...wholeDay, 
      // ...culExp,
      loggedIn: req.session.loggedIn,
    });
    
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
  }

});

// get weekly view page
router.get('/', async (req, res) => {

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
        
          const user = userData.get({ plain: true });
          console.log(user);
          
          const newCulExp = await Category.findByPk(1, {
            include: [ { model: Recipe }, { model: Wine }, {model: Playlist } ],
          });
          const culExp = newCulExp.get({ plain: true });

          res.render('homepage', {
            ...user, 
            ...culExp,
            loggedIn: req.session.loggedIn,
          });
          
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
    }

});

// GET culinary experience
// router.get('/culexp/:id', async (req, res) => {

//   try {
//       const newCulExp = await Category.findByPk(req.params.id, {
//         include: [ { model: Recipe}, { model: Wine}, { model: Playlist}  ],
//       });
//       const culExp = newCulExp.get({ plain: true });

//       res.json(culExp);
      
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
    
// });

// get login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router; 