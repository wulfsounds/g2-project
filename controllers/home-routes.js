const router = require('express').Router();
const { User, List, Task, Category, Recipe, Wine, Playlist } = require('../models');

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